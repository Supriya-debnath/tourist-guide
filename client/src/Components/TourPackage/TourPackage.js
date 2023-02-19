import React from "react";
import { Link } from "react-router-dom";
import './TourPackage.css';

const TourPackage = ({ tourpackage }) => {
  console.log(tourpackage);
  const { img, description, tourPlace, time, days, taka } = tourpackage;

  return (
   <>
    <div className="py-5">
      <div className="row">
      <div class="col">
                        <div class="card h-100 w-100 bg-light">
                            <div class="row">
                                <div class="col-6">
                                    <img src={img} alt="" class="w-100 h-100" />
                                </div>
                                <div class="col-6">
                                    <div class="card-body">
                                        <h4>{tourPlace}</h4>
                                        <p>{description}</p>
                                        <h5>{time}</h5>
                                        <h3>{days}</h3>
                                        <p>{taka}</p>
                                        <Link>
                                            <div className="btnHover">
                                              <button className=" google-btn btn animate__animated animate__fadeInUp">
                                                Book Now
                                              </button>
                                            </div>
                                          </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
      </div>
    </div>





    {/* <div className="col product">
          <div className="card h-100">
            <img src={img} className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title cursive-text text-center">{tourPlace}</h4>

              <p className="card-text more-small-text text-muted text-center">
                {description}
              </p>

              <p className=" card-text more-small-text text-muted text-center">
                {days}
              </p>
            <h5 className="days card-text more-small-text text-muted text-center">
                {time} <br /> <span>{taka}</span>
              </h5>
            </div>
            <Link>
              <div className="google-btn">
                <button className=" google-btn btn animate__animated animate__fadeInUp">
                  Book Now
                </button>
              </div>
            </Link>
          </div>
        </div> */}


   </>
  );
};

export default TourPackage;

// import React from 'react';
// import { Link } from "react-router-dom";


// const TourPackage = () => {
//     return (
//         <>
//        <h1>Tour Package Coming Soon</h1>
//         </>
//     );
// };

// export default TourPackage;
