import React from "react";
import { Form, Input, Menu, Dropdown, Button, Row, Col, Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux/actions/userActions";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
const { Option } = Select;
// ..
AOS.init();
function Register(props) {
  console.log(props);
  const [typePass, setTypePass] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);

  function onFinish(values) {
    dispatch(userRegister(values));
  }
  // const [form]=Form.create.useForm()
  return (
    <div className="login">
      {loading && <Spinner />}
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <img
            className="w-100"
            data-aos="slide-left"
            data-aos-duration="1500"
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            alt=""
          />
          <h1 className="login-logo">Your's Choice</h1>
        </Col>
        <Col lg={8} className="text-left p-4">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <img
              className="avatar"
              data-aos="slide-left"
              data-aos-duration="1500"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fuser-interface-vol-3-12%2F66%2F68-512.png&f=1&nofb=1"
              alt=""
            />
            <h3>Register</h3>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input placeholder="enter your username" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true },
                { type: "email", message: "Enter correct email" },
              ]}
            >
              <Input placeholder="enter your email id" />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true }]}
            >
              <Select initialvalues="Male"className="test1"  >
                <Option value="Male" className="test2">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  min:6,
                  message: "Please input 6 letters password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="enter your password" className="pwd" />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm Password" className="pwd"/>
            </Form.Item>

            <button className="btn2">Register</button>

            <Link className="log" to="/login">
              Click Here to Login
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
