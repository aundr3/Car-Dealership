import React from "react";
import Navbar from "./Navbar"

const Header =()=>{
    return(
        <header className="header container" id="header">
            <div className="row">
                <div className="col-lg-6 col-md-12 title">
                    <h1 className="title-text text-uppercase">Shifting <span className="tertiary">Gears</span></h1>
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header