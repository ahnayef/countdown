import styles from './page.module.css'
import Countdown from './(components)/countdown/page'
import data from "./assets/target.json"
import Head from 'next/head'


export default function Home() {

  // const targetDate = new Date("2023-09-14T12:00");

  return (
    <main className={styles.main}>
  <Head>
    <title>Countdown</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
      <Countdown title={data.title} targetDate={data.targetDate} subtitle={data.subtitle}/>
    </main>
  )
}

