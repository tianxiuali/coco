import Link from 'next/link'
import styles from './style.module.css'

export default function Home() {
  return (
    <>
      <Link href="/" className="back">
        ← back
      </Link>
      <p className="title">写给你的浪漫 📜</p>
      <Link href="/letter/20250607" className="button">
        2025-06-07
      </Link>
    </>
  )
}
