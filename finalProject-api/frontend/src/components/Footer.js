import React from "react";

const Footer =()=>{
    return(
        <footer className="footer container-fluid" id="footer">
            <div className="footer-div col-md text-center container">
                <p className="slogan footer-p text-uppercase">Eye it – try it – buy it!</p>
                <p className="footer-logo text-uppercase">Shifting <span className="tertiary">Gears</span></p>
                <p className="footer-p text-uppercase">321 engine lane</p>
                <div className="row">
                    <div className="col-md-6">
                        <p className="footer-p text-uppercase">sales</p>
                        <p className="footer-p text-uppercase">(123)-123-4321</p>
                    </div>
                    <div className="col-md-6">
                        <p className="footer-p text-uppercase">service</p>
                        <p className="footer-p text-uppercase">(123)-231-9876</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer