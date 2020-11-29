import { Children } from "react"
import styles from "./Calendar.module.css"

const Calendar: React.FC = ({ children }) => {
  return <div className={styles.calendar}>{children}</div>
}

export default Calendar
