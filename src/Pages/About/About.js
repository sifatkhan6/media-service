import React from 'react';
import sifat from '../../images/sifat.png'

const About = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col d-flex flex-column justify-content-center align-items-center'>
                    <h2>Hi.. I am Sifat Khan</h2>
                    <p>Now I am learning Web Develpment. After 3 months I want to be a Web Developer. Want to do job as a web developer for 1 year. Then I will be Graguated, want to do job as a Software enginerr and will go for my Masters after graduation..</p>
                </div>
                <div className='col'>
                    <img className='w-100' src={sifat} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;