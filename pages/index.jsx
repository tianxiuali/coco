import Link from 'next/link'
import styles from './style.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <p className={styles.title}>Hello, coco ❤️</p>
      <Link href="/letter20250607" className={styles.button}>
        这是第一封信
      </Link>
      <div className={styles.button}>
        以后还有很多封...
      </div>
    </div>
  )
}
