import Link from 'next/link'
import Left from '@/components/icon/left'
import styles from './style.module.css'

export default function Home() {
  return (
    <>
      <Link href="/" className="back">
        <Left />
      </Link>
      <p className="title">写给你的浪漫 📜</p>
      <Link href="/letter/20250607" className={styles.letter}>
        <img src="/image/letter.png" alt="" srcset="" />
        <p className={styles.text}>2025-06-07</p>
      </Link>
    </>
  )
}
