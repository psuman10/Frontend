import React from 'react'
import {Link} from "react-router-dom"
export const Navbar = () => {
    return (
            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div className="flex-row d-flex">
                    <button type="button" className="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/" title="Free Bootstrap 4 Admin Template">Admin Dashboard</Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/"><span className="sr-only">Home</span></Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3001/" target="_blank" rel="noreferrer">Link</a>
                        </li>    */}
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" data-target="#myModal" data-toggle="modal">Profile</Link>
                        </li>
                        {/* <li className="nav-item"> */}
                {/* </li> */}
                    </ul>
                </div>
       </nav>
    )
}

export default Navbar