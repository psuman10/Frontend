import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()
function Login() {
  
    function onFinish(values) {
           
           console.log()
    }

  return (
    <div className="login">
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          
        </Col>
        <Col lg={8} className="text-left p-5">
          <Form layout="vertical" className="login-form p-5" onFinish={onFinish}>
            <h1>Login</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
            >
              <Input placeholder="enter your username" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"

            >
              <Input placeholder="enter your password" />
            </Form.Item>

            <button className="btn1 mt-2 mb-3">Login</button>
            <br />

            <Link to="/">Click Here to Register</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
