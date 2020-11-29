import Head from 'next/head'
import Day from 'components/Day'
import Calendar from 'components/Calendar'
import styles from '../../styles/Home.module.css'

const days = [23, 13, 21, 3, 18, 10, 15, 19, 5, 24, 9, 16, 6, 20, 4, 22, 11, 7, 1, 14, 8, 2, 17, 12]

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
