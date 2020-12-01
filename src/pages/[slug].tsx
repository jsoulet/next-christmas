import BlogPost from "src/components/Post"
import config from "src/blog.config.js"
import { getPostBySlug, getAllPosts } from "src/api"

const PostPage = ({ post }) => {
  return (
    <div>
      <BlogPost post={post} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "excerpt",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
    "coverImageAlt",
    "draft",
  ])
  return {
    props: { post },
  }
}
export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])
  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      }
    }),
    fallback: false,
  }
}
export default PostPage
