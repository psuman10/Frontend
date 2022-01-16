import { message } from 'antd';
import axios from 'axios';

export const addCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('/api/cars/addcar' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('New car added successfully')
         setTimeout(() => {
            window.location.href='/admin'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}