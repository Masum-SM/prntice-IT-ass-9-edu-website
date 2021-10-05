import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>

            <div className="contact-info">
                <div className="addres">
                    <h2>Address</h2>
                    <h6>Lalbug Qwwtenta Southend(2nd Floor).</h6>
                    <h6>(In front of Lalbug Model High school.</h6>
                    <h6>Lalbug,Dhaka-1211,Banglades.</h6>

                    <h2>Office Hours</h2>
                    <h6>Saturday to Friday</h6>
                    <h6> 10:00 am to 5:00 pm</h6>
                </div>
                <div className="contact-call">
                    <h2>Contact</h2>
                    <h6>Phone: 02345456</h6>
                    <h6>Cell: 0172349474</h6>
                    <h6>Cell: 0193749373</h6>
                    <h6>Email: xyz123@gamil.com</h6>
                </div>
            </div>
            <div className="get-in-touch">
                <h3>Get In Touch</h3>
                <h5>If you are in this website please subscribe.</h5>
                <InputGroup className="mb-3 input-feild">
                    <FormControl
                        placeholder="Email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </div>



            <h6 className="contact-bodyFooter">You can visit the institute anytime during office hours. Prantice IT reception is on the  Lalbug Qwwtenta Southend(2nd Floor)(2th floor) Dhaka</h6>
        </div>
    );
};

export default Contact;