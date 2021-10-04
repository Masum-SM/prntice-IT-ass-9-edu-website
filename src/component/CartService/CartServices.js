import React from 'react';
import { Card } from 'react-bootstrap';
import './CartService.css'

const CartServices = (props) => {
    const { courseName, img, description, duration, mentor, price } = props.services
    return (
        <div className="services-card">
            <Card>
                <div className="services-cardBody">
                    <div>
                        <Card.Img className="services-img" variant="top" src={img} />
                    </div>
                    <div>
                        <Card.Body className="card-info">
                            <h2>
                                Course Name: {courseName}
                            </h2>
                            <small>Description : {description}</small>
                            <div className="duration-mentor">
                                <h5>Mentor: {mentor} </h5>
                                <h5>Duration: {duration}</h5>

                            </div>
                            <h3>Price: <span>${price}</span> </h3>
                        </Card.Body>
                    </div>
                </div>


            </Card>
        </div>
    );
};

export default CartServices;