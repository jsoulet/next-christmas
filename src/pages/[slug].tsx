import BlogPost from "src/components/Post"
import Layout from "src/components/Layout"
import { getPostBySlug, getAllPosts } from "src/api"
import { FC } from "react"

const PostPage: FC<{ post: MdxPost }> = ({ post }) => {
  return (
    <Layout
      title={`${post.calendarDay} dec : ${post.title}`}
      previewImage={post.coverImage}
    >
      <BlogPost post={post} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
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
