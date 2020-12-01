import { useState, useEffect } from "react"
import cn from "classnames"
import { useRouter } from "next/router"
import styles from "./Day.module.css"

export interface DayProps {
  number?: number
  slug?: string
}

const Day: React.FC<DayProps> = ({ number = 0, slug }) => {
  const router = useRouter()
  const [isFlipped, setIsFlipped] = useState(false)
  useEffect(() => {
    if (isFlipped) {
      setTimeout(() => {
        router.push(`${slug}`).then(() => window.scrollTo(0, 0))
      }, 100)
    }
  }, [isFlipped, router, slug])
  return (
    <>
      <div
        className={cn(styles.day, { [styles.flipped]: isFlipped })}
        onClick={() => setIsFlipped(!isFlipped)}
        role="button"
      >
        <div className={styles.inner}>
          <div className={cn(styles.front, styles[`variant${number % 4}`])}>
            {number}
          </div>
        </div>
      </div>
    </>
  )
}

export default Day
