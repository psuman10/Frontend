import React, {useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings, cancelBooking } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import {Link} from "react-router-dom"
import moment from "moment";
import { DeleteOutlined} from "@ant-design/icons";
import { Popconfirm} from "antd";
function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const {loading} = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  return (
    <DefaultLayout>
      <h3 className="text-center mt-2">My Bookings</h3>
    
      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
         
            {bookings.filter(o=>o.user===user._id).map((booking) => {
             return <Row key={user._id} gutter={16} className="bs1 mt-3 text-left">
                <Col lg={6} sm={24}>
                    <p><b>{booking.car.name}</b></p>
                    <p>Total hours : <b>{booking.totalHours}working days</b></p>
                    <p>Rent per hour : <b>$: {booking.car.rentPerHour}</b></p>
                    <p>Total amount : <b>$: {booking.totalAmount}</b></p>
                </Col>

                <Col lg={12} sm={24}>
                <p>Transaction Id : <b>{booking.transactionId}</b></p>
                <p>From: <b>{booking.bookedTimeSlots.from}</b></p>
                <p>To: <b>{booking.bookedTimeSlots.to}</b></p>
                <p>Date of booking: <b>{moment(booking.createdAt).format('MMM DD yyyy')}</b></p>
                </Col>

                <Col lg={6} sm={24} className='text-right'>
                    <img style={{borderRadius:5}} src={booking.car.image}  height="140" className="p-2"/>
                </Col>
                <Link to="/" className="btn2 mt-2 mb-3 ml-3"> 
                <Popconfirm
                      title="Are you sure to delete this car?"
                      onConfirm={()=>{dispatch(cancelBooking({bookingid : booking._id}))}}
                      
                      okText="Yes"
                      cancelText="No"
                    >
                      Cancel Booking
                      <DeleteOutlined
                        style={{ color: "red", cursor: "pointer" }}
                      />
                    </Popconfirm>
                    </Link>
                    
                
              </Row>;
            })}
          
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default UserBookings;
