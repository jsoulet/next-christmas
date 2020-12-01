import MDX from "@mdx-js/runtime"

import Link from "next/link"
import { FC } from "react"
// import Container from "../ui/Container"
import CodeBlock from "./CodeBlock"
import Image from "./Image"
import Iframe from "./Iframe"
// import DraftBadge from "../ui/DraftBadge"
const isLocal = process.env.NODE_ENV === "development"

import styles from "./Post.module.css"
const BlogPost: FC<{ post: MdxPost }> = ({ post }) => {
  const components = {
    // Box: (props) => <Box {...props} />,
    // pre: (props) => <div {...props} />,
    code: CodeBlock,
    img: Image,
    iframe: Iframe,
  }
  return (
    <>
      {post.coverImage && (
        <img
          className={styles.coverImage}
          src={post.coverImage}
          alt={post.coverImageAlt || ""}
        />
      )}
      <div className={styles.container}>
        <div className={styles.header}>
          {post.category && (
            <div className={styles.category}>{post.category}</div>
          )}
          <h1 className={styles.title}>{post.title}</h1>
          {post.date && (
            <span>
              Originally published on {new Date(post.date).toLocaleDateString()}
            </span>
          )}
        </div>
        <MDX components={components}>{post.content}</MDX>
      </div>
    </>
  )
}
export default BlogPost
