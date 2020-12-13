import { FC } from "react"
import styles from "./InlineCode.module.css"

const InlineCode: FC = ({ children, ...props }) => {
  return (
    <code className={styles.code} {...props}>
      {children}
    </code>
  )
}

export default InlineCode
