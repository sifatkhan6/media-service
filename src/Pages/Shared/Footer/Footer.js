import React from 'react';
import footer from './Footer.css'

const Footer = () => {
    const today = new Date();
    const year =today.getFullYear();
    return (
        <footer>
            <div className='footer'>
                <p><small>Copyright Sifat Khan {year}</small></p>
            </div>
        </footer>
    );
};

export default Footer;