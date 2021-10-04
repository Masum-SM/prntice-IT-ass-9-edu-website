import React, { useEffect, useState } from 'react';
import CartServices from '../CartService/CartServices';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./fakedbServices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services">
            <h1 variant="dark">Our Services</h1>
            {
                services.map(service => <CartServices
                    key={service.code}
                    services={service}
                ></CartServices>)
            }
        </div>
    );
};

export default Services;