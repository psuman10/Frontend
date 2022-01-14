import { Col, Row, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import {editUser,getAllUsers} from "../redux/actions/userActions";
function EditUser({ match }) {
 
  const { users } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const [user, setuser] = useState();
  const [totalusers, settotalusers] = useState([]);
  useEffect(() => {
    if (users.length === 0) {
      dispatch(getAllUsers());
    } else {
        settotalusers(users);
      setuser(users.find((o) => o._id === match.params.userid));
   
    }
  }, [users]);

  function onFinish(values) {
    console.log(values)
    values._id = user._id;

    dispatch(editUser(values));
   
  }

  return (
    <>
  <Navbar/>
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className='p-2'>
          {
          totalusers.length > 0 && (
            <Form
              initialValues={user}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
            >
              <h3>Edit User</h3>

              <hr />
              <Form.Item
                name="username"
                label="Username"
                rules={[{ required: true }]}
              >
                <Input />
              
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <div className="text-right">
                <button className="btn1">Edit User</button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
      </>
  );
}

export default EditUser;
