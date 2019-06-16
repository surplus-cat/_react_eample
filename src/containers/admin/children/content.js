import React from 'react'
import styles from './admin.less'
import { Breadcrumb } from 'antd'

export default function (props) {
  const extraBreadcrumbItems = props.breadcrumb.map((el, index) => {
    return <Breadcrumb.Item key={el}>{el}</Breadcrumb.Item>
  })
  return (
    <div className={styles.content}>
      <div className={styles.breadcrumb}>
        <Breadcrumb>{extraBreadcrumbItems}</Breadcrumb>
      </div>
      <div className={styles['show-view']}>
        {props.children}
      </div>
    </div>
  )
}