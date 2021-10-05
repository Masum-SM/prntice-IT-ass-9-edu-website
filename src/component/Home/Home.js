import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CartHome from '../CartHome/CartHome';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./fakedataHome.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className='image'>
                <img src="./sb.jpg" alt="" />
            </div>
            <div className='home-body'>

                <div className='title-div'>
                    <h2 className="title">Welcome to <span className='Prentice'>Prentice IT</span> Institute: Where IT Leaders are Created</h2>
                    <h4>Prentice IT Institute, one of the leading IT training institutes in Bangladesh offers the best training opportunities. It has been playing a vital role to eradicate the unemployment problem since 2008. Enriched with quality training this institute has never failed to help the individuals to reveal their talents making harmony between creativity and IT. No matter what is your background, we are offering 30 courses for you conducted by experienced trainers to advance your skills.</h4>
                </div>


                <Row xs={1} md={2} className="g-4">
                    {
                        courses.map(course => <CartHome
                            key={course.code}
                            course={course}
                        ></CartHome>)
                    }

                </Row>



            </div>
        </div>

    );
};

export default Home;