import Link from 'next/link'
import styles from './style.module.css'

export default function Home() {
  return (
    <>
      <p className="title">Hello, coco ❤️</p>
      <Link href="/letter" className="button">
        情书
      </Link>
      <Link href="/birthday" className="button">
        生日礼物
      </Link>
    </>
  )
}
