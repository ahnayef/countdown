import styles from './page.module.css'
import Countdown from './(components)/countdown/page'
import data from "./assets/target.json"
import Head from 'next/head'

export default async function Home() {

  // const targetDate = new Date("2023-09-14T12:00");

  return (
    <main className={styles.main}>
      <Head>
        <title>Countdown</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="NEUB | Spring 23 | CSE" />
        <meta name="keywords" content="NEUB,Exam, Countdown, CSE" />
        <meta property="og:title" content="Examcountdown" />
        <meta property="og:url" content="https://examcountdown.vercel.app/" />
        <meta property="og:image"
          content="https://raw.githubusercontent.com/ahnayef/countdown/master/app/assets/meta.png" />
      </Head>
      <Countdown title={data.title} targetDate={data.targetDate} subtitle={data.subtitle} />
    </main>
  )
}

