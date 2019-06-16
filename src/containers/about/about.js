import React from 'react'
import styles from './about.less'
import doudou from '../../assets/imgs/doudou.jpg'

export default function () {

  return (
    <div className={styles.about}>
      <img className={styles.img} src={doudou} alt="" />
      <br />
      一个菜鸡前端：兜兜
      <br />
      我的git地址:
      <br />
      <a href="https://github.com/treasureDouDou">
        https://github.com/treasureDouDou
      </a>
    </div>
  )
}