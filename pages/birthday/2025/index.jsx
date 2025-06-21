import { useState } from 'react'
import Link from 'next/link'
import Confetti from 'react-confetti'
import styles from './style.module.css'

const gifts = [
  {
    id: 0,
    name: '冒险吧伊布系列盲盒',
    img: '/image/yibu.png'
  },
  {
    id: 1,
    name: 'YSL黑管唇釉',
    img: '/image/ysl.png'
  },
  {
    id: 2,
    name: '男模一名',
    img: '/image/model.png'
  },
  {
    id: 3,
    name: '玉桂狗保温杯',
    img: '/image/yuguigou.png'
  }
]

export default function Home() {
  const [isConfetiShow, setIsConfetiShow] = useState(false)
  const [currentGift, setCurrentGift] = useState({})

  const openGift1 = (gift) => {
    setIsConfetiShow(true)
    setCurrentGift(gift)
  }

  const hideGift = () => {
    setIsConfetiShow(false)
  }

  return (
    <>
      <Link href="/birthday" className="back">
        ← back
      </Link>
      <div className={styles.home}>
        {gifts.map((item, index) => {
          return (
            <div id={item.id} className={styles.gift} onClick={() => openGift1(item)}>
              <img src="/image/gift.png" alt="" />
              <p className={styles.text}>礼物{index + 1}</p>
            </div>
          )
        })}
      </div>
      {isConfetiShow && (
        <div className={styles.confetti} onClick={hideGift}>
          <Confetti gravity={0.2} />
          <div className={styles.open}>
            <img src={currentGift.img} alt="" />
            <p className={styles.text}>{currentGift.name}</p>
          </div>
        </div>
      )}
    </>
  )
}
