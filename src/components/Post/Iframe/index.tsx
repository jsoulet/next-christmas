import { FC } from "react"
import styles from "./IFrame.module.css"

const Iframe: FC = (props) => {
  return <iframe className={styles.iframe} {...props} />
}

export default Iframe
