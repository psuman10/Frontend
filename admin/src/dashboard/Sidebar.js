import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        
         <div className="col-md-3 col-lg-2" id="sidebar" style={{backgroundColor:"#241e46"}}>
          
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li className="nav-item mb-2 mt-3"><Link className="nav-link" to="/" ><h5 style={{fontSize:"25px",color:"orangered"}}>Your's Choice</h5></Link></li>
            </ul>
       </div>
    )
}


export default Sidebar
