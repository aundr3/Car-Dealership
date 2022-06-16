import React, { useState } from "react";

const Contact =()=>{

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel_number: '',
        department: '',
        textbox: ''
    })

    const submitForm=()=>{
        // e.preventDefault()
        fetch('http://localhost:5000/api/contact/create',{
            method:'post',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded'
              },
            body: JSON.stringify(formData)
        }).then((response)=> {
            return response.json()
        }).then((body)=> {
            console.log(body);
        });
    }

    const handleChange = (event) => {
        console.log(event)
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    console.log(formData)

    return(
    <div>
        <section className="section contact-section container">
            <p className="contact-text text-center text-uppercase">contact us</p>
            <form action="/Thanks" className="form" onSubmit={submitForm}>
                <div className="flex-column d-flex">
                    <label htmlFor="name" className="form-label text-uppercase">name:</label>
                        <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" placeholder="Enter Your Name" required />
                    <label htmlFor="email" className="form-label text-uppercase">email:</label>
                    <input value={formData.email} onChange={handleChange} type="email" id="email" name="email" placeholder="Enter your Email" required />
                    <label htmlFor="phone" className="form-label text-uppercase">number:</label>
                    <input value={formData.tel_number} onChange={handleChange} type="tel" id="phone" name="tel_number" pattern="{0-9}{3}-{0-9}{3}-{0-9}{4}" required placeholder="Format: 123-456-7890" />
                    <p className="form-label text-uppercase">choose a department</p>
                    <div className="">
                        <label htmlFor="sales" className="form-label text-uppercase">
                            sales:
                            <input value="1" onChange={handleChange} type="radio" id="SALES" name="department" checked={formData.department === '1'} />
                        </label>
                        <label htmlFor="service" className="form-label text-uppercase">
                            service:
                            <input value="2" onChange={handleChange} type="radio" id="SERVICE" name="department" checked={formData.department === '2'} />
                        </label>
                    </div>
                    <label htmlFor="text-area">
                        <p className="form-label text-uppercase">Enter your concern or problem</p>
                        <textarea value={formData.textbox} onChange={handleChange} name="textbox" id="" cols="60" rows="10"></textarea>
                    </label>
                </div>
                <input className="form-submit" type="submit" />
            </form>
        </section>
    </div>
    )
}

export default Contact