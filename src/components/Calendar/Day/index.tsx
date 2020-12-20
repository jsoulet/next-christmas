import cn from "classnames"
import Link from "next/link"
import styles from "./Day.module.css"

export interface DayProps {
  number?: number
  title?: string
  slug?: string
  isOpen?: boolean
  handleOnOpen: () => boolean
}

const Day: React.FC<DayProps> = ({
  number = 0,
  slug,
  isOpen,
  title,
  handleOnOpen,
}) => {
  return (
    <>
      <div
        className={cn(styles.day, { [styles.flipped]: isOpen })}
        role="button"
      >
        <div className={cn(styles.inner, styles[`variant${number % 4}`])}>
          <div className={cn(styles.front)} onClick={handleOnOpen}>
            {number}
          </div>
          <div className={styles.back}>
            <div className={styles.number}>{number}</div>
            {slug && <Link href={slug}>{title}</Link>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Day
