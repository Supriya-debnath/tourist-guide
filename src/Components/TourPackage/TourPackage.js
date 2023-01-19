import React from 'react';
import { Link } from 'react-router-dom';

const TourPackage = ({tourpackage}) => {
    console.log(tourpackage);
    const {img, description, tourPlace, time, days, taka} = tourpackage;

    return (
        <div className="col product">
            
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h4 className="card-title cursive-text text-center">
                            {tourPlace}
                        </h4>

                        <p className="card-text more-small-text text-muted text-justify">
                            {description}
                        </p>
                        
                        <p className="card-text more-small-text text-muted text-justify">
                            Duration: {days}
                        </p>
                        <h5 className="card-text more-small-text text-muted text-justify">
                            {time} TK:{taka}
                        </h5>


                    </div>
                    <Link to="/">
                    <button className="btn btn-success text-white px-4 w-75 rounded-0 order-btn "> Book Now</button>
                    </Link>

                </div>
               
        </div>
    );
};


export default TourPackage;