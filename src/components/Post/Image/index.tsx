import { FC } from "react"
import NextImage, { ImageProps } from "next/image"

import styles from "./Image.module.css"
const Image: FC<ImageProps> = (props) => {
  return <img className={styles.image} {...props} />
}

export default Image
