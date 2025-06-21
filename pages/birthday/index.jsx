import Link from 'next/link'
import styles from './style.module.css'

export default function Home() {
  return (
    <>
      <Link href="/" className="back">
        ← back
      </Link>
      <p className="title">快来拆礼物吧 🎁</p>
      <Link href="/birthday/2025" className="button">
        2025
      </Link>
    </>
  )
}
