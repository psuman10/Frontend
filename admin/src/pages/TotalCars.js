import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCar, getAllCars } from "../redux/actions/carsActions";

import { Col, Row} from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import Navbar from "../Navbar"
function TotalCars() {
  const { cars } = useSelector((state) => state.carsReducer);
  console.log(cars)
  const [totalCars, setTotalcars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  useEffect(() => {
    setTotalcars(cars);
  }, [cars]);

  return (
    <>  <Navbar />
       
               <Row justify='center ' style={{marginTop:"80px"}}></Row>
      <Row justify="center" gutter={16}>
        {totalCars.map((car) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className="car p-2 bs1">
                <img src={car.image} className="carimg" alt="car" />

                <div className="car-content d-flex align-items-center justify-content-between">
                  <div className="text-left pl-2">
                    <p>{car.name}</p>
                    <p> Rent Per Hour {car.rentPerHour}$ /-</p>
                  </div>

                  <div className="mr-4">
                    <Link to={`/editcar/${car._id}`}>
                      <EditOutlined
                        className="mr-3"
                        style={{ color: "green", cursor: "pointer" }}
                      />
                    </Link>

                    {/* <Popconfirm
                      title="Are you sure to delete this car?"
                      onConfirm={()=>{dispatch(deleteCar({carid : car._id}))}}
                      
                      okText="Yes"
                      cancelText="No"
                    >
                      <DeleteOutlined
                        style={{ color: "red", cursor: "pointer" }}
                      />
                    </Popconfirm> */}
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      </>
  );
}

export default TotalCars;
