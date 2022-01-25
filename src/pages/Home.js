import DefaultLayout from "../components/DefaultLayout";
import Slider from "../slider/slider";
import { getAllCars } from "../redux/actions/carsActions";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Col, Row, DatePicker } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;
function Home() {
    const {cars} = useSelector(state=>state.carsReducer)
    const [totalCars , setTotalcars] = useState([])
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    useEffect(() => {

        setTotalcars(cars)
        
    }, [cars])


    function setFilter(values){

        var selectedFrom = moment(values[0] , 'MMM DD yyyy HH:mm')
        var selectedTo = moment(values[1] , 'MMM DD yyyy HH:mm')

        var temp=[]

        for(var car of cars){

              if(car.bookedTimeSlots.length == 0){
                  temp.push(car)
              }
              else{

                   for(var booking of car.bookedTimeSlots) {

                       if(selectedFrom.isBetween(booking.from , booking.to) ||
                       selectedTo.isBetween(booking.from , booking.to) || 
                       moment(booking.from).isBetween(selectedFrom , selectedTo) ||
                       moment(booking.to).isBetween(selectedFrom , selectedTo)
                       )
                       {

                       }
                       else{
                        temp.push(car)
                    }

                }

            }
        }

        setTotalcars(temp)
 

    }

    return (
        <DefaultLayout>

            <Slider></Slider>

             <Row className='mt-3' justify='center'>
                 
                 <Col lg={20} sm={24} className='d-flex justify-content-center date_picker'>

                     <RangePicker showTime={{format: 'HH:mm'}} format='MMM DD yyyy HH:mm' onChange={setFilter}/>
                 
                 </Col>

             </Row>

            


              
              <Row justify='center' gutter={16}>

                   {totalCars.map(car=>{
                       return <Col lg={5} sm={24} xs={24}>
                            <div className="car p-2 bs2">
                               <img src={car.image} className="carimg"/>

                               <div className="car-content d-flex align-items-center justify-content-between">

                                    <div className='text-left pl-2 letter'>
                                        <p>{car.name}</p>
                                        <p> Rent Per Hour {car.rentPerHour} /-</p>
                                    </div>

                                    <div>
                                        <button className="btn1 mr-2 letter"><Link to="/">Book Now</Link></button>
                                    </div>

                               </div>
                            </div>
                       </Col>
                   })}

              </Row>

        </DefaultLayout>
    )
}

export default Home
