import React from 'react';

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='icon'>
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://in.linkedin.com/company/linkedin"><i className="fab fa-youtube"></i></a>
                <a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
                <a href="https://www.twitter.com/"><i className="fas fa-map-marker-alt"></i></a>
            </div>
            <h6>Copyright © 2021 Prentice IT Institute. | Sitemap</h6>
        </div>
    );
};

export default Footer;