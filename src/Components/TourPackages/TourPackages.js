import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import TourPackage from '../TourPackage/TourPackage';

const TourPackages = () => {
    const [packages, setPackages]= useState([])
    console.log(packages);

    useEffect(() => {
        fetch("/packagesDB.json")
            .then(res => res.json())
            .then(data => {setPackages(data)
                // const reverseData = data.slice().reverse();
                // setServices(reverseData.slice(0, 8));
            });
    }, []);
    return (
        <div className="mb-4">
        {/* <div className="service-banner text-center">
            <h4 className="display-6 cursive-text service-title animate__animated animate__zoomIn">
            Our Most Popular Services
            </h4>
            <div className='tour'>
                <div>
                    <small className="text-muted small-text">
                    Village tourism offers a unique opportunity for  
                    </small>
                </div>

                <div>
                    <small className="text-muted small-text">
                    comfortable cultural immersion.
                    </small>
                </div>
            </div>
        </div> */}
		<div class="bg-white px-4 py-3 mb-3">
						<h1 class="text-18 text-bold text-center border-bottom pb-3 mb-3">Travel Bangladesh : <span class="text-red">Tour Packages</span></h1>
						<p> Discovery Bangladesh operate various regular, customize and special Bangladesh tour packages round the year. As a professional tour operator in Bangladesh, we regularly operate customized Bangladesh tour packages which include luxury Bangladesh tour packages, City Sightseeing and River Cruising tour packages, Archaeological Sites & Cultural Tour, Adventure & Wildlife tours and many more tour packages. Come and explore Bangladesh with us and Discover Bangladesh Naturally! </p>
						<p><strong>Tour Packages From Discovery Bangladesh</strong></p>
						<p> We operate tailor made custom tour packages as well as regular tour packages. You also can fix several tour packages together and make your tour longer and smother. Similarly, if you want relaxed tour, you can split our regular tour packages. </p>
					</div>

        <Container>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                {packages.map(tourpackage => <TourPackage key={tourpackage._id} tourpackage={tourpackage} />)}
            </div>
        </Container>
    </div>
    );
};

export default TourPackages;

