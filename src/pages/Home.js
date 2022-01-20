import DefaultLayout from '../components/DefaultLayout'
import Slider from '../slider/slider'
import {getAllCars} from '../redux/actions/carsActions'
import { useSelector , useDispatch } from 'react-redux'
import React , {useState,useEffect} from 'react'
function Home(){

    const {cars} = useSelector(state=>state.carsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCars())
    }, [])  
    

    
    return(
        <DefaultLayout >
            <Slider></Slider>


        </DefaultLayout>
    )

}

export default Home