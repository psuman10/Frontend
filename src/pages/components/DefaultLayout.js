import React from "react";
import {Dropdown, Button,Row, Col } from "antd";
import { NavLink } from "react-router-dom";

function DefaultLayout(props) {
    return (    <div>
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

              <Dropdown placement="topCenter">
                <Button>
                  <i className="glyphicon glyphicon-user"></i>
                  suman
                </Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>
    </div>
    )
}

export default DefaultLayout;
