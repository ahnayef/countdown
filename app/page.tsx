import styles from './page.module.css'
import Countdown from './(components)/countdown/page'
import data from "./assets/target.json"


export default function Home() {

  // const targetDate = new Date("2023-09-14T12:00");

  return (
    <main className={styles.main}>
      <Countdown title={data.title} targetDate={data.targetDate} />
    </main>
  )
}

