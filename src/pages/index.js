import Head from 'next/head'
import Day from 'components/Day'
import Calendar from 'components/Calendar'
import styles from '../../styles/Home.module.css'

const days = [
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

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Calendar>
        {days.map(d => <Day key={d} number={d}/>)}
      </Calendar>
    </div>
  )
}
