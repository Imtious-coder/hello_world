import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    const { cioc } = useParams()
    const [details, setDetails] = useState([]);
    const { name, capital, flag, area, population, region, timezone } = details;
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${cioc}`)
            .then(res => res.json())
            .then(data => setDetails(data[0]))
        console.log(details);
    }, [])
    return (
        <div className="Total d-flex justify-content-center pt-5 pb-5">
            <div className="Country mt-5 mb-5">
                <img className="Flag" src={flag} alt="" />
                <h1>{name} </h1>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6"><h4>Capital: {capital} </h4> </div>
                        <div className="col-md-6">
                            <h5>Area: {area}</h5>
                        </div>
                    </div>
                </div>
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