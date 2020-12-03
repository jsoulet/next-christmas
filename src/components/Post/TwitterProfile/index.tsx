import { FC } from "react"

import styles from "./TwitterProfile.module.css"

export interface TwitterCard {
  name: string
  picture: string
  username: string
  description: string
}

const TwitterCard: FC<TwitterCard> = ({
  name,
  picture,
  username,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.picture}>
        <img src={picture} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{name}</div>
        <div className={styles.username}>{username}</div>
        <div className={styles.description}>{description}</div>
        <a
          className={styles.button}
          href={`https://twitter.com/${username}`}
          target="_blank"
        >
          Follow
        </a>
      </div>
    </div>
  )
}

export default TwitterCard
