import MDX from "@mdx-js/runtime"
import NextImage from "next/image"
import { FC } from "react"
// import Container from "../ui/Container"
import CodeBlock from "./CodeBlock"
import Image from "./Image"
import Iframe from "./Iframe"
import TwitterProfile from "./TwitterProfile"
import Link from "next/link"

const isLocal = process.env.NODE_ENV === "development"

import styles from "./Post.module.css"
const BlogPost: FC<{ post: MdxPost }> = ({ post }) => {
  const components = {
    Link: (props) => <Link {...props} />,
    // pre: (props) => <div {...props} />,
    code: CodeBlock,
    img: Image,
    iframe: Iframe,
    TwitterProfile,
  }
  return (
    <>
      {post.coverImage && (
        <img
          // layout="responsive"
          className={styles.coverImage}
          src={post.coverImage}
          alt={post.coverImageAlt || ""}
          // height={500}
          // width={1200}
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
        <div className={styles.backLink}>
          <Link href="/">Retourner au calendrier</Link>
        </div>
      </div>
    </>
  )
}
export default BlogPost
