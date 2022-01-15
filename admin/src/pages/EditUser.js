// import { Col, Row, Form, Input } from "antd";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Navbar from "../Navbar";
// import {editUser,getAllUsers} from "../redux/actions/userActions";
// function EditUser({ match }) {
 
//   const { users } = useSelector((state) => state.usersReducer);
//   const dispatch = useDispatch();
//   const [user, setuser] = useState();
//   const [totalusers, settotalusers] = useState([]);
//   useEffect(() => {
//     if (users.length === 0) {
//       dispatch(getAllUsers());
//     } else {
//         settotalusers(users);
//       setuser(users.find((o) => o._id === match.params.userid));
   
//     }
//   }, [users]);

//   function onFinish(values) {
//     console.log(values)
//     values._id = user._id;

//     dispatch(editUser(values));
   
//   }

//   return (
//     <>
//   <Navbar/>
//       <Row justify="center mt-5">
//         <Col lg={12} sm={24} xs={24} className='p-2'>
//           {
//           totalusers.length > 0 && (
//             <Form
//               initialValues={user}
//               className="bs1 p-2"
//               layout="vertical"
//               onFinish={onFinish}
//             >
//               <h3>Edit User</h3>

//               <hr />
//               <Form.Item
//                 name="username"
//                 label="Username"
//                 rules={[{ required: true }]}
//               >
//                 <Input />
              
//               </Form.Item>
//               <Form.Item
//                 name="email"
//                 label="Email"
//                 rules={[{ required: true }]}
//               >
//                 <Input />

//                 </Form.Item>
//               <Form.Item
//                 name="gender"
//                 label="Gender"
//                 rules={[{ required: true }]}
//               >
//                 <Input />

//                 </Form.Item>
//               <Form.Item
//                 name="address"
//                 label="Address"
//                 rules={[{ required: true }]}
//               >
//                 <Input />
//               </Form.Item>

//               <div className="text-right">
//                 <button className="btn1">Edit User</button>
//               </div>
//             </Form>
//           )}
//         </Col>
//       </Row>
//       </>
//   );
// }

// export default EditUser;










import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { editUser,getAllUsers } from "../redux/actions/userActions";

export default function Profile() {
    const user = JSON.parse(localStorage.getItem("user"));

  const initialState = {
    username: "",
    email: "",
    gender: "",
    address: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { username, email, gender, address } = userData;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(userData));
  };

  const { users } = useSelector((state) => state.usersReducer);
// console.log(users)

// users.map((o) => {
//     if(o._id===user._id) console.log("hello")
   
    
// }
// )
 
  useEffect(() => {
    
    setUserData(user)
       
        
   
      
   
  
  }, []);


  useEffect(()=>{
dispatch(getAllUsers())
  },[])


  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

//    useEffect(() => {
//     setUserData();
//    }, []);

  
  return (
    <div className="edit_profile">
      <Link className="text-light btn btn-danger btn_close " to="/">
        Home
      </Link>

      <form onSubmit={handleSubmit}>
        <div className="info_avatar">
          <img src="https://picsum.photos/200" alt="avatar" />
          <span>
            <i className="fas fa-camera" />
            <p>Change</p>
            <input type="file" name="file" id="file_up" />
          </span>
        </div>
        <div className="form-group">
          <label
            htmlFor="username"
            style={{
              color: "black",
              fontWeight: 600,
            }}
          >
            Username
          </label>
          <div className="position-relative">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={handleInput}
            />
            <small
              className="text-danger position-absolute"
              style={{
                top: "50%",
                right: "5px",
                transform: "translateY(-50%)",
              }}
            ></small>
          </div>
        </div>
        <div className="form-group">
          <label
            htmlFor="email"
            style={{
              color: "black",
              fontWeight: 600,
            }}
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleInput}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="address"
            style={{
              color: "black",
              fontWeight: 600,
            }}
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleInput}
            className="form-control"
          />
        </div>
        <label
          htmlFor="gender"
          style={{
            color: "black",
            fontWeight: 600,
          }}
        >
          Gender
        </label>
        <div className="input-group-prepend px-0 mb-4">
          <select
            name="gender"
            value={gender}
            onChange={handleInput}
            id="gender"
            className="custom-select text-capitalize"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button className="btn2" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
