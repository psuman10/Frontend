import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        
         <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#241e46"}}>
          
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li className="nav-item mb-2 mt-3"><Link className="nav-link" to="/" ><h5 style={{fontSize:"25px",color:"orangered"}}>Your's Choice</h5></Link></li>
                <li className="nav-item mb-2 "><Link className="nav-link text-white" to="/"><i className="fas fa-user font-weight-bold"></i> <span className="ml-3">Dashboard</span></Link></li>
                <li className="nav-item mb-2">
                    <Link className="nav-link text-white" to="#submenu1" data-toggle="collapse" data-target="#submenu1"><i className="fas fa-car font-weight-bold"></i> <span className="ml-3"> Cars▾</span></Link>
                    <ul className="list-unstyled flex-column pl-5 collapse" id="submenu1">
                       <li className="nav-item mb-2 "><Link className="nav-link text-white" to="/addcar"><i className="fa fa-plus-circle"></i> Add Car</Link></li>
                       <li className="nav-item mb-2 "><Link className="nav-link text-white" to="/admin"><i className="fas fa-book-medical"></i> Update Car</Link></li>
                       <li className="nav-item mb-2 "><Link className="nav-link text-white" to="/admin"><i className="fas fa-book-reader"></i> Available</Link></li>
                    </ul>
                </li>
                <li className="nav-item mb-2"><Link className="nav-link text-white" to="/"><i className="fas fa-users font-weight-bold"></i> <span className="ml-3">Users</span></Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-white" to="/userbookings"><i className="fa fa-retweet font-weight-bold"></i><span className="ml-3">Bookings</span></Link></li>
                <li className="nav-item mb-2">
                    <Link to="/" className="nav-link text-white"><i className="far fa-wallet font-weight-bold"></i> <span className="ml-3"> Payment▾</span></Link>
                    <ul className="list-unstyled flex-column pl-5 collapse" id="submenu2">
                       <li className="nav-item mb-2 "><Link className="nav-link text-white" to="/"><i className="fa fa-check-circle"></i> Payment Done</Link></li>
                       <li className="nav-item mb-2 "><Link className="nav-link text-white" to="/"><i className="fa fa-undo"></i> Remaining</Link></li>
                    </ul>
                </li>
            </ul>
       </div>
    )
}


export default Sidebar
