import { useState } from "react"
import cn from "classnames"
import styles from "./Day.module.css"

export interface DayProps {
  number?: number
}

const Day: React.FC<DayProps> = ({ number = 0 }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <>
      <div
        className={cn(styles.day, { [styles.flipped]: isFlipped })}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={styles.inner}>
          <div className={cn(styles.front, styles[`variant${number % 4}`])}>
            {number}
          </div>
          {/* <div className={styles.back}>
            <span>back</span>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Day
