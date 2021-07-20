import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const { name, capital, flag } = props.country;
    return (
        <div className="col-6 col-md-3 mt-2 mb-2">
            <div className="Card">
                {/* Flag */}
                <img className="Flags" src={flag} alt="" />
                {/* Name and capital */}
                <p className="Name">{name} </p>
                <p className="Capital">Capital: {capital} </p>
                {/* Details button */}
                <Link to={'/details/' + name}><button className="DetailButtons">Details</button></Link>
            </div>
        </div>
    );
};

export default Country;