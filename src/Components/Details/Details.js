import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    // Dynamiq path here...
    const { names } = useParams()
    // Data stored here...
    const [details, setDetails] = useState([]);
    // Destructure here...
    const { name, capital, flag, area, population, region } = details;

    // Data loaded dynamicly by name here..
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${names}`)
            .then(res => res.json())
            .then(data => setDetails(data[0]))
        console.log(details);
    }, [])

    return (
        // UI here...
        <div className="Total d-flex justify-content-center pt-5 pb-5">
            <div className="Country mt-5 mb-5">
                {/* Flag here... */}
                <img className="Flag" src={flag} alt="" />
                {/* Name */}
                <h1>{name} </h1>
                {/* Capital and area */}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6"><h4>Capital: {capital} </h4> </div>
                        <div className="col-md-6">
                            <h5>Area: {area}</h5>
                        </div>
                    </div>
                </div>
                {/* Population and region */}
                <div className="container mt-1 mb-5">
                    <div className="row">
                        <div className="col-md-6"><h6>Population:- {population} </h6> </div>
                        <div className="col-md-6">
                            <h6>Region: {region}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;