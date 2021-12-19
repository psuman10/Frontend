import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()
function Register() {
  
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
            <h1>Register</h1>
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
              rules={[{ required: true }]}
            >
              <Input placeholder="enter your email id" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}

            >
              <Input placeholder="enter your password" />
            </Form.Item>
            <Form.Item
              name="cpassword"
              label="Confirm Password" 
              rules={[{ required: true }]}
            >
              <Input placeholder="enter to confirm password"/>
            </Form.Item>

            <button className="btn1 mt-2 mb-3">Register</button>
            <br />

            <Link to="/">Click Here to Login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
