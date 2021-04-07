import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, flag } = props.country;
    return (
        <div className="col-md-3 mt-5 mb-5 lol">
            <img className="Flags" src={flag} alt=""/>
            <h3>{name} </h3>
            <p> {capital} </p>
        </div>
    );
};

export default Country;