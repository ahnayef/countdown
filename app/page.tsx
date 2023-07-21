import Image from 'next/image'
import styles from './page.module.css'
import Countdown from './countdown/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <Countdown />
    </main>
  )
}
