import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Card, message } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// User actions
import { signupUser } from "../../redux/actions/userActions";
import store from "../../redux/store";
import { CLEAR_ERRORS } from "../../redux/types";

const Signup = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [handle, setHandle] = useState();
  const onFinish = () => {
    const newUserData = {
      email,
      password,
      confirmPassword,
      handle,
    };
    props.signupUser(newUserData, props.history);
  };
  useEffect(() => {
    if (props.user.authenticated) {
      props.history.push("/");
    }
  }, [props.user.authenticated, props.history]);
  // console.log(props.UI.errors);
  return (
    <div className="row">
      <div className="col-sm-8 col-md-6 mx-auto p-4">
        <Card className="px-4 py-1 mx-4">
          <h2 className="text-center mb-3">Signup</h2>
          {props.UI.errors?.confirmPassword &&
            message.error(props.UI.errors?.confirmPassword)}
          {props.UI.errors?.error && message.error(props.UI.errors?.error)}
          {props.UI.errors?.email && message.error(props.UI.errors?.email)}

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  store.dispatch({ type: CLEAR_ERRORS });
                }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  store.dispatch({ type: CLEAR_ERRORS });
                }}
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  store.dispatch({ type: CLEAR_ERRORS });
                }}
              />
            </Form.Item>

            <Form.Item
              name="handle"
              rules={[
                {
                  required: true,
                  message: "Please input your Handle!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Handle"
                onChange={(e) => {
                  setHandle(e.target.value);
                  store.dispatch({ type: CLEAR_ERRORS });
                }}
              />
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Should accept agreement"),
                },
              ]}
            >
              <Checkbox>
                I have read the <Link to="/">agreement</Link>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                disabled={props.UI.loading}
              >
                {props.UI.loading ? "Registering" : "Register"}
              </Button>
              <span className="text-center d-block mt-1">
                Already have an account? <Link to="/login">login now!</Link>
              </span>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    UI: state.UI,
  };
};
const mapActionsToProps = {
  signupUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Signup);
