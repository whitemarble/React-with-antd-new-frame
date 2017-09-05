import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import {loginClicked} from '../actions/LoginAction'
import './Login.css'

const FormItem = Form.Item;

class Login extends Component {
    handleSubmit = (e) => {
        const{loginClick} = this.props;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            loginClick();
          }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button" >
                    Log in
                </Button>
                Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loginClick:loginClicked}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(Login));