import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Singlecar = () => {
    const [carInfo, setCarInfo] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/api/inventory/${id}`)
        .then(res => res.json())
        .then(data => setCarInfo(data))
    }, [])

    
    return (
        <div>
            <section className="section singlecar-section container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src={carInfo.img_url} alt="placeholder img" className="img-fluid rounded carImg" />
                    </div>
                    <div className="col-md-6">
                        <p className="specs-title text-uppercase text-center">specifications</p>
                        <div className="specs-div text-uppercase d-flex justify-content-between">
                            <p className="specs-text text-uppercase">make and model</p>
                            <p className="specs-text text-uppercase">{carInfo.make} {carInfo.model}</p>
                        </div>
                        <div className="specs-div text-uppercase d-flex justify-content-between">
                            <p className="specs-text text-uppercase">year</p>
                            <p className="specs-text text-uppercase">{carInfo.year}</p>
                        </div>
                        <div className="specs-div text-uppercase d-flex justify-content-between">
                            <p className="specs-text text-uppercase">stock number</p>
                            <p className="specs-text text-uppercase">{carInfo.stock_number}</p>
                        </div>
                        <div className="specs-div text-uppercase d-flex justify-content-between">
                            <p className="specs-text text-uppercase">interior</p>
                            <p className="specs-text text-uppercase">{carInfo.interior}</p>
                        </div>
                        <div className="specs-div text-uppercase d-flex justify-content-between">
                            <p className="specs-text text-uppercase">exteroir</p>
                            <p className="specs-text text-uppercase">{carInfo.exterior}</p>
                        </div>
                        <div className="specs-div text-uppercase d-flex justify-content-between">
                            <p className="specs-text text-uppercase">engine</p>
                            <p className="specs-text text-uppercase">{carInfo.engine}</p>
                        </div>
                        <div className="specs-div text-uppercase d-flex justify-content-between">
                            <p className="specs-text text-uppercase">transmission</p>
                            <p className="specs-text text-uppercase">{carInfo.transmission}</p>
                        </div>
                        <div className="specs-div text-uppercase d-flex justify-content-between">
                            <p className="specs-text text-uppercase">drive wheels</p>
                            <p className="specs-text text-uppercase">{carInfo.drive_wheels}</p>
                        </div>
                        <div className="specs-div text-uppercase d-flex justify-content-between">
                            <p className="specs-text text-uppercase">vin</p>
                            <p className="specs-text text-uppercase">{carInfo.vin}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Singlecar