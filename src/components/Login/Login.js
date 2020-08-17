import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Card, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Login.css";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import { CLEAR_ERRORS } from "../../redux/types";
import store from "../../redux/store";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onFinish = () => {
    const userData = {
      email,
      password,
    };
    props.loginUser(userData, props.history);
  };

  useEffect(() => {
    if (props.user.authenticated) {
      // props.history.push("/");
    }
  }, [props.user.authenticated, props.history]);
  return (
    <div className="row">
      <div className="col-sm-8 col-md-6 mx-auto p-4">
        <Card className="px-4 py-1 mx-4">
          <h2 className="text-center mb-3">Login</h2>
          {props.UI.errors && message.error(props.UI.errors.general)}
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
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Link className="login-form-forgot" to="/reset">
                Forgot password
              </Link>
            </Form.Item>

            <Form.Item>
              <Button
                disabled={props.UI.loading}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                {props.UI.loading ? "Logging in" : "Log in"}
              </Button>
              <span className="text-center d-block mt-1">
                Dont't have an account? <Link to="/signup">Register now!</Link>
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
    UI: state.UI,
    user: state.user,
  };
};
const mapActionsToProps = { loginUser };
export default connect(mapStateToProps, mapActionsToProps)(Login);
