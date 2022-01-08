import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
         <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#241e46"}}>
          
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li className="nav-item mb-2 mt-3"><Link className="nav-link" to="/" ><h5 style={{fontSize:"25px",color:"orangered"}}>Your's Choice</h5></Link></li>
                <li className="nav-item mb-2 "><Link className="nav-link text-white" to="/"><i className="fas fa-user font-weight-bold"></i> <span className="ml-3">Dashboard</span></Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-white" to="/"><i className="fas fa-users font-weight-bold"></i> <span className="ml-3">Users</span></Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-white" to="/"><i className="fa fa-retweet font-weight-bold"></i><span className="ml-3">Bookings</span></Link></li>
                
            </ul>
       </div>
    )
}


export default Sidebar
