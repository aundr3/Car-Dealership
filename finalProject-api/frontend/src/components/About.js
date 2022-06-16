import React from "react";

const About =()=>{
    return(
    <div>
    <section className="section about-section container">
        <div className="row">
            <div className="col-md-6 text-center about-image-div">
                <img src="https://media.istockphoto.com/photos/new-cars-at-dealer-showroom-picture-id585495312?k=20&m=585495312&s=612x612&w=0&h=WUFMRlflmUVP77FSbepq8f-0GVC6jY7jlhynUjkpsqs="  className="img-fluid about-img rounded" alt="dealership img" />
            </div>
            <div className="col-md-6">
                <div className="text-center">
                    <p className="text-uppercase info-header">sales number:</p>
                    <p className="info-text text-uppercase">(123)-123-4321</p>
                    <p className="text-uppercase info-header">service number:</p>
                    <p className="info-text text-uppercase">(123)-231-9876</p>
                    <p className="text-uppercase info-header">Location:</p>
                    <p className="info-text text-uppercase">321 engine lane</p>
                </div>
            </div>
        </div>
    </section>
    </div>
    )
}

export default About

