import React from 'react';
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
                    <h6>Cell: 01583723827</h6>
                </div>
            </div>
            <h6 className="contact-bodyFooter">You can visit the institute anytime during office hours. Prantice IT reception is on the  Lalbug Qwwtenta Southend(2nd Floor)(2th floor) Dhaka</h6>
        </div>
    );
};

export default Contact;