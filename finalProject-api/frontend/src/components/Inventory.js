import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Inventory =()=>{
    const [inventory, setInventory] = useState([])
    

    useEffect(() => {
        fetch('http://localhost:5000/api/inventory')
        .then(res => res.json())
        .then(data => setInventory(data))
    }, [])

    const invElements = inventory.map(item => {
        return(
                <div className="car-div col-lg-3 col-md-12">
                    <div className="text-center">
                        <img src={item.img_url} alt="placeholder img text-center" className="img-fluid rounded inventory-img" />
                        <p className="car-name text-uppercase">{item.make}</p>
                        <p className="car-name text-uppercase">{item.model}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="car-info text-uppercase">year: {item.year}</p>
                        <p className="car-info text-uppercase">Price: {item.price}</p>
                    </div>
                    <div className="text-center more-info-div">
                        <Link className="more-info text-uppercase" to={`${item.id}`}>more info</Link>
                    </div>
                </div>
        )
    })
    return(
        <section className="section inventory-section container">
            <div className="row">
                {invElements}
            </div>
        </section>
    )
}

export default Inventory