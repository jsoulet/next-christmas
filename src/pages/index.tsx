import Head from "next/head"
import Calendar, { Day } from "src/components/Calendar"
import styles from "../../styles/Home.module.css"
import { getPostBySlug, getAllPosts } from "src/api"

const orderedDays = [
  8,
  13,
  12,
  2,
  9,
  21,
  7,
  24,
  20,
  11,
  15,
  16,
  23,
  17,
  18,
  22,
  3,
  6,
  5,
  4,
  19,
  1,
  10,
  14,
]

export default function Home({ slugPerDay }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Calendar>
        {orderedDays.map((d) => (
          <Day key={d} number={d} slug={slugPerDay?.[d] ?? "fallback"} />
        ))}
      </Calendar>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts(["slug", "calendarDay"])
  return {
    props: {
      slugPerDay: posts.reduce((accu, post) => {
        if (!post.calendarDay) {
          return accu
        }
        return {
          ...accu,
          [post.calendarDay]: post.slug,
        }
      }, {}),
    },
  }
}
