import React from 'react'
import styles from './admin.less'
import { Button, Icon, Menu } from 'antd'
import { verifyLogin } from '../../../actions/rootActions'
const SubMenu = Menu.SubMenu

export default function (props) {
  let handleClick = e => {
    props.dispatch(verifyLogin({
      isLogin: false
    }))
    props.history.push('/login')
  }

  return (
    <div className={styles.header}>
      <Button
        onClick={props.toggleCollapsed}
        style={{ border: 0, padding: '5px 10px', marginLeft: '15px' }}>
        <Icon type={props.collapsed ? 'menu-unfold' : 'menu-fold'} />
      </Button>

      <div className={styles.exit}>
        <Menu
          onClick={handleClick}
          mode="horizontal">
          <SubMenu
            title={
              <span>
                <Icon type="user" />兜兜
              </span>
            }>
            <Menu.Item key="user">退出</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  )
}