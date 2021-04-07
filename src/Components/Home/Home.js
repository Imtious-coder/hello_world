import React, { useEffect, useState } from 'react';
import Country from '../../Components/Country/Country'

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
        console.log(countries);
    }, [])

    return (
        <div className="container">
            <div className="row d-flex justify-content-between mt-5">
            {
                countries.map(countries => <Country country={countries}></Country>)
            }
            </div>
        </div>
    );
};

export default Home;