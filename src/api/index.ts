import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
const postsDirectory = join(process.cwd(), "src/markdown/posts")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

interface MdxPost  {
  title?: string
  excerpt?: string
  calendarDay?: number
  coverImage?: string
  date?: string
  author?: {
    name?: string
    image?: string
  }
  ogImage?: string
  coverImageAlt?: string
  draft?: boolean
  content?: string
  slug?: string

}

export function getPostBySlug(slug: string, fields: (keyof MdxPost)[] = []): MdxPost {
  const realSlug = slug.replace(/\.mdx$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  const post = {}
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      post[field] = realSlug
    }
    if (field === "content") {
      post[field] = content
    }
    if (data[field]) {
      post[field] = data[field]
    }
  })
  return post
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts  = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}