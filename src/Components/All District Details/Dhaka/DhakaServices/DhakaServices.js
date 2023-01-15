import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const DhakaServices = ({service}) => {
    console.log(service);
    const {img,district,districtInfo} =service;

    return (
        <div className="col product">
            
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt={district} />
                    <div className="card-body">
                        <h4 className="card-title cursive-text text-center">
                            {district}
                        </h4>

                        <p className="card-text more-small-text text-muted text-justify">
                            {districtInfo}
                        </p>

                    </div>

                    <Link>
                    <button className="btn btn-success text-white px-4 w-75 rounded-0 order-btn ">Book Now</button>
                    </Link>

                </div>
               
        </div>
    );
};

export default DhakaServices;