import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { name, img, price, description } = service;

    return (
        <div className=' col-sm-12 col-md-6 col-lg-4 mb-5'>
            <div class="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top w-100" alt='...' />
                <div class="card-body text-center">
                    <h4 class="card-title">{name}</h4>
                    <h6 class="card-title">Price: ${price}</h6>
                    <p class="card-text">{description}</p>
                    <Link to="/checkout" class="btn btn-dark">Take Service</Link>
                </div>
            </div>
        </div>

    );
};

export default Service;