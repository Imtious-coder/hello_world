import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    // Destructured here...
    const { name, capital, flag } = props.country;
    return (
        // UI here...
        <div className="col-md-3 mt-5 mb-5 Card">

            {/* Flag here.. */}
            <img className="Flags" src={flag} alt="" />

            {/* Name and capital here... */}
            <h3>{name} </h3>
            <p>Capital: {capital} </p>

            {/* Details button here.. */}
            <Link to={'/details/' + name}><button className="DetailsButton">Details</button></Link>
        </div>
    );
};

export default Country;