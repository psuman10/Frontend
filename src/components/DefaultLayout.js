import React from "react";
import { Menu, Dropdown, Button, Row, Col } from "antd";
import { NavLink } from "react-router-dom";

function DefaultLayout(props) {
  const user=JSON.parse(localStorage.getItem("user")).user

  const menu = (
    <Menu>
      <Menu.Item key='1'>
        <a href="/"><i className="fa fa-home text-dark"></i><span className="ml-2">Home</span></a>
      </Menu.Item>
      <Menu.Item key='2'>
      <a href={`profile/${user._id}`}><i className="fa fa-user-md text-dark"></i><span className="ml-2">Profile</span></a>
      </Menu.Item>
      <Menu.Item key='3'>
        <a href="/userbookings" ><i className="fa fa-book text-dark"></i><span className="ml-2">Bookings</span></a>
      </Menu.Item>
      <Menu.Item key='4'
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
          <p style={{ color: "orangered" }}><i className="fa fa-cogs text-dark"/><span className="ml-2">Logout</span></p>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1>
                <img
                  src={process.env.PUBLIC_URL + "Imgs/logo.png"}
                  style={{ width: 100 }}
                  alt="logo"
                />
                <b className="suman">
                  <NavLink to="/">Your Choice </NavLink>
                </b>
              </h1>
              

              <Dropdown overlay={menu}>
                <Button >
                  <i className="fas fa-user"></i>
                  {user.username}
                </Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout