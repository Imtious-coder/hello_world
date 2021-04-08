import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const { name, capital, flag, cioc } = props.country;
    return (
        <div className="col-md-3 mt-5 mb-5 lol">
            <img className="Flags" src={flag} alt=""/>
            <h3>{name} </h3>
            <p>Capital: {capital} </p>
            <Link to={'/details/'+cioc}><button className="DetailsButton">Details</button></Link>
        </div>
    );
};

export default Country;