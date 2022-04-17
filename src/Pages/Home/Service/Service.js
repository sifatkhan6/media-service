import React from 'react';

const Service = ({service}) => {

    const {name, img, price, description} = service;

    return (
        <div>
            <img src={img} alt="" />
            <h4 className=''>This is service: {name}</h4>
            <h5 className=''>Price: ${price}</h5>
            <p className=''>{description}</p>
        </div>
    );
};

export default Service;