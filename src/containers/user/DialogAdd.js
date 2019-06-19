import React from 'react'
import { Modal, Form, Input, Radio } from 'antd'
const FormItem = Form.Item
const RadioGroup = Radio.Group

class Dialog extends React.Component {

  hanleOk = () => {
    this.props.form.validateFields((err, value) => {
      if (!err) {
        this.props.hanleOk(value)
      }
    })
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.visible && !this.props.visible) {
      this.props.form.resetFields();
    }
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    const { visible, handleCancel } = this.props;
    const formItemLayout = {
      labelCol: { span:4 },
      wrapperCol: { span: 20 }
    }

    return (
      <div>
        <Modal
          okText="确认"
          cancelText="取消"
          title="新增"
          visible={visible}
          onCancel={handleCancel}
          onOk={this.hanleOk}>
          <FormItem {...formItemLayout} label="姓名">
            {
              getFieldDecorator('name', {
                rules: [{
                  required: true,
                  message: '请输入姓名'
                }]
              })(<Input placeholder="请输入姓名" />)
            }
          </FormItem>
          <FormItem {...formItemLayout} label="年龄">
            {
              getFieldDecorator('age', {
                rules: [
                  {
                    required: true,
                    message: '请输入年龄'
                  }
                ]
              })(<Input placeholder="请输入年龄" />)
            }
          </FormItem>
          <FormItem {...formItemLayout} label="性别">
            {
              getFieldDecorator('sex')(
                <RadioGroup>
                  <Radio value="男">男</Radio>
                  <Radio value="女">女</Radio>
                </RadioGroup>
              )
            }
          </FormItem>
        </Modal>
      </div>
    )
  }
}

export default Form.create()(Dialog)