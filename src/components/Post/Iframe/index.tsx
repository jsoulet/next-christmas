import { FC } from "react"
import styles from "./Iframe.module.css"

const Iframe: FC = (props) => {
  return <iframe className={styles.iframe} {...props} />
}

export default Iframe
