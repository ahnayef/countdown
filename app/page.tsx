import styles from './page.module.css'
import Countdown from './countdown/page'


export default function Home() {

  const targetDate = new Date();

  return (
    <main className={styles.main}>
      <Countdown title={"ahn"} targetDate={targetDate}/>
    </main>
  )
}

