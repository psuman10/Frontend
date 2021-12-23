import React from "react";
import { Menu, Dropdown, Button, Row, Col } from "antd";
import { NavLink,Link } from "react-router-dom";


function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const menu = (
    <Menu>
      <Menu.Item>
       <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/userprofile">Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/userbookings">Bookings</Link>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <li style={{ color: "orangered" }}>Logout</li>
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
                  <NavLink to="/">Your's Choice </NavLink>
                </b>
              </h1>

              <Dropdown overlay={menu}>
                <Button>
                  <i className="fas fa-user"></i>
                  suman
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

export default DefaultLayout;
