import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from './Services/Services';
import Model1 from '../../images/Model1.png';
import Model2 from '../../images/Model2.png';
import Model3 from '../../images/Model3.png';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <section className='d-flex justify-content-center'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Model1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Photography</h3>
                            <p>I am the next model for your project.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Model2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Music Video</h3>
                            <p>I am ready to make your music video viral.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Model3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Wedding Dance</h3>
                            <p>Its your wedding? Don't worry. I will make the party more enjoyable.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;