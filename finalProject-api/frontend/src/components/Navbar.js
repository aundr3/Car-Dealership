import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return(
            <div className="col-lg-6 col-md-12">
                <ul className="nav justify-content-around main-nav-items d-flex">
                    <li className="nav-item main-nav-item"><Link className="nav-link main-nav-link text-uppercase"
                            to="/">home</Link></li>
                    <li className="nav-item main-nav-item"><Link className="nav-link main-nav-link text-uppercase"
                            to="/inventory">inventory</Link></li>
                    <li className="nav-item main-nav-item"><Link className="nav-link main-nav-link text-uppercase"
                            to="/contact">contact us</Link></li>
                    <li className="nav-item main-nav-item"><Link className="nav-link main-nav-link text-uppercase"
                            to="/about">about</Link></li>
                </ul>
            </div>
    )
}

export default Navbar