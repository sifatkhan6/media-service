import React from 'react';
import Model1 from '../../images/model1.jpg'
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <section>
                <div>
                    <h3>I am a NaamChara Model...</h3>
                    <p>You can take my service but need to pay a lot.</p>
                </div>
                <div>
                    <img className='w-100' src={Model1} alt="" />
                </div>
            </section>
            <Services></Services>
        </div>
    );
};

export default Home;