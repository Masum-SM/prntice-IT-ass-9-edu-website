import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './CartHome.css'

const CartHome = (props) => {
    const { courseName, img, mentor, price, duration } = props.course
    return (
        <Col className='cart'>
            <Card className="home-cart">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='Course-name'>Course Name: {courseName}</Card.Title>
                    <Card.Text className='mentor'>
                        Mentor: {mentor}
                    </Card.Text>
                    <Card.Text className='duration'>Course Duration: {duration} </Card.Text>
                    <Card.Text className='price'>Price: <span>${price}</span></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CartHome;