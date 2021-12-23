import React from "react";
import { Row, Col, Form, Input } from "antd";
import AOS from "aos";
import { useState } from "react";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();
function Login() {
  const [typePass, setTypePass] = useState(false);

  function onFinish(values) {
    console.log(values);
  }

  return (
    <div className="login">
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <img
            className="w-100"
            data-aos="slide-left"
            data-aos-duration="1500"
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="" />
          <h1 className="login-logo">Your's Choice</h1>
        </Col>
        <Col lg={8} className="text-left p-5">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <img
              className="avatar"
              data-aos="slide-left"
              data-aos-duration="1500"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fuser-interface-vol-3-12%2F66%2F68-512.png&f=1&nofb=1" alt="" />
            <h3>Login</h3>

            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input placeholder="enter your username" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <div className="pass">
                <Input
                  type={typePass ? "text" : "password"}
                  placeholder="enter your password"
                />

                <span onClick={() => setTypePass(!typePass)}>
                  <i
                    className={typePass ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"}
                  ></i>
                </span>
              </div>
            </Form.Item>

            <button className="btn2">Login</button>

            <a className="log" href="/register">
              Click Here to Register
            </a>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
