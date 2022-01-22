import DefaultLayout from '../components/DefaultLayout'
import Slider from '../slider/slider'
import {getAllCars} from '../redux/actions/carsActions'
import { useSelector , useDispatch } from 'react-redux'
import React , {useEffect, useState} from 'react'
import { Col, Row} from 'antd'
import {Link} from 'react-router-dom'
function Home(){

    const {cars} = useSelector(state=>state.carsReducer)
    const [totalCars , setTotalcars] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    useEffect(() => {

        setTotalcars(cars)
        
    }, [cars])
    

    
    return(
        <DefaultLayout >
            <Slider></Slider>
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
                                        <button className="btn1 mr-2 letter"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
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