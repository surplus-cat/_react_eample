import React from 'react'
import { Input, Row, Col, Button, Table } from 'antd'
import styles from './list.less'
import Dialog from './DialogAdd'
const Search = Input.Search

export default function () {

  const [name, setName] = React.useState('');
  const [list, setList] = React.useState([]);
  const [filterList, setFilterList] = React.useState([]);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    let _list = []
    for (let i = 0; i < 100; i++) {
      _list.push({
        name: `张三${i}`,
        age: i,
        key: i,
        sex: Math.random() > 0.5 ? '男' : '女'
      })
    }
    setFilterList(_list);
    setList(_list);
    return () => {
      setFilterList([]);
      setList([]);
    };
  }, [])

  let onChange = e => {
    setName(e.target.value)
  }

  let filterHandler = _ => {
    if (!name || name === '0') {
      setFilterList(list);
      return false
    } else {
      let _filterList = list.filter(el => el.name === name)
      setFilterList(_filterList);
    }
  }

  let handleCancel = _ => {
    setVisible(false)
  }

  let handleOk = value => {
    value.key = list.length + 1;
    // 深拷贝
    let _list = list.slice(0);
    _list.unshift(value)
    setVisible(false)
    setList(_list);
    filterHandler()
  }

  let handleAdd = _ => {
    setVisible(true)
  }

  return (
    <div>
      <Row gutter={16}>
        <Col span={4}>
          <Search
            placeholder="姓名"
            onChange={onChange}
            value={name}/>
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={filterHandler}>
            查询
          </Button>
        </Col>
        <Col span={4} offset={12}>
          <Button style={{ float: `right` }} onClick={handleAdd}>
            新增
          </Button>
        </Col>
      </Row>
      <div className={styles.table}>
        <Table
          dataSource={filterList}
          pagination={{ pageSize: 6 }}>
          <Table.Column title="姓名" dataIndex="name" />
          <Table.Column title="性别" dataIndex="sex" />
          <Table.Column title="年龄" dataIndex="age" />
        </Table>
      </div>
      <Dialog
        visible={visible}
        handleCancel={handleCancel}
        handleOk={handleOk}/>
    </div>
  )
}