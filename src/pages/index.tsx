import React from "react"
import Calendar, { Day } from "src/components/Calendar"
import Layout from "components/Layout"
import { getAllPosts } from "src/api"
import { useRouter } from "next/router"

const isLocal = process.env.NODE_ENV === "development"

const orderedDays = [
  8,
  11,
  12,
  2,
  9,
  20,
  14,
  21,
  18,
  24,
  15,
  17,
  23,
  16,
  13,
  22,
  3,
  6,
  5,
  19,
  4,
  1,
  10,
  7,
]

type Post = {
  title: string
  slug: string
  calendarDay: number
}
interface HomeProps {
  posts: {
    [calendarDay: string]: Post
  }
}

const shouldOpenDay = (post: Post): boolean => {
  return (
    post && (isLocal || new Date() >= new Date(`2020-12-${post.calendarDay}`))
  )
}

const saveOpenPosts = (ids: number[]) => {
  const uniqIds = ids.filter((value, index, array) => {
    return array.indexOf(value) === index
  })
  localStorage.setItem("openDays", JSON.stringify(uniqIds))
}

const getOpenPosts = (): [] => {
  try {
    return JSON.parse(localStorage.getItem("openDays")) || []
  } catch {
    return []
  }
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  const router = useRouter()
  const [openDays, setOpenDays] = React.useState<number[]>([])
  React.useEffect(() => {
    if (window) {
      try {
        setOpenDays(getOpenPosts())
      } catch {}
    }
  }, [])
  React.useEffect(() => {
    saveOpenPosts(openDays)
  }, [openDays])
  return (
    <Layout>
      <Calendar>
        {orderedDays.map((d) => (
          <Day
            key={d}
            number={d}
            isOpen={openDays.includes(d)}
            handleOnOpen={() => {
              setOpenDays([...openDays, d])
              if (!shouldOpenDay(posts[d])) {
                setTimeout(() => {
                  setOpenDays(openDays.filter((day) => day !== d))
                  router.push("fallback").then(() => window.scrollTo(0, 0))
                }, 500)
                return false
              }
              return true
            }}
            title={posts[d]?.title}
            slug={posts[d]?.slug}
          />
        ))}
      </Calendar>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts(["slug", "calendarDay", "title"])
  return {
    props: {
      posts: posts.reduce((accu, post) => {
        if (!post.calendarDay) {
          return accu
        }
        return {
          ...accu,
          [post.calendarDay]: { ...post },
        }
      }, {}),
    },
  }
}

export default Home
