import axios from "axios";
import {message} from 'antd'

export const userLogin=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.post('/api/users/login' , reqObj)
        localStorage.setItem('user' , JSON.stringify(response.data))
        message.success(response.data.msg)
        dispatch({type: 'LOADING' , payload:false})
        setTimeout(() => {
            window.location.href='/'
         
        }, 500);
    } catch (error) {
      
        message.error("Username or Password doesnot match")
        dispatch({type: 'LOADING' , payload:false})
    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.post('/api/users/register' , reqObj)
        message.success('Registration successfull')
        setTimeout(() => {
            window.location.href='/login'
         
        }, 500);
       
        dispatch({type: 'LOADING' , payload:false})
        
    } catch (error) {
        console.log(error)
        message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }
}



export const getAllUsers=()=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})
  
    try {
        const response = await axios.get('/api/users/getallusers')
        dispatch({type: 'GET_ALL_USERS', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
  
  }


  export const editUser=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.put('/api/users/editusers' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('User details updated successfully')
         setTimeout(() => {
            window.location.href='/'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}


export const deleteUsers=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true}) 

    try {
         await axios.delete(`/api/users/deleteusers/${reqObj.userid}`)
       
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('User deleted successfully')
         setTimeout(() => {
            window.location.reload()
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}