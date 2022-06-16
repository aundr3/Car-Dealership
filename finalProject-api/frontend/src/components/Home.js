import React, { useState, useEffect } from 'react';

const Home =()=>{
    const [img, setImg] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/inventory')
        .then(res => res.json())
        .then(data => setImg(data[Math.floor(Math.random() * data.length)].img_url))

    }, [])


    return(
        <div>
        <section className="section home-section text-center">
            <div className="spotlight">
                <p className="home-text text-uppercase">car spotlight</p>
                <img src={img} alt="img-fluid spotlight-img" className="img-fluid rounded spotlight-img" />
            </div>
        </section>
        </div>
    )
}

export default Home