
import React from 'react'
import { Link } from 'react-router-dom'



const NotFound = () => {

    return (

        <div className="position-relative" style={{minHeight: 'calc(100vh - 70px)'}}>

            <h2 className="position-absolute text-danger"

            style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                {/* <img
                  src={process.env.PUBLIC_URL + "Imgs/notfound.jpg"}
                  style={{ width: 500 }}
                  
                  alt="logo" 
                /> */}
                
                404 | Page Not Found!!

                <br/>

                <div className="position-absolute"   style={{top: '180%', left: '50%', transform: 'translate(-50%, -50%)'}}>

                    
                    <Link to="/" button type="button" className="btn btn-success text-light  ">Back to Home</Link>

                
                </div>

            </h2> 

        </div>

    )

}



export default NotFound