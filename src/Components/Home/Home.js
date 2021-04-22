import React, { useEffect, useState } from 'react';
import Country from '../../Components/Country/Country'
import './Home.css';

const Home = () => {
    // Data stored here...
    const [countries, setCountries] = useState([]);

    // Api loaded here...
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        // UI here...
        <section id="Home">
            <div className="container">
                <div className="row d-flex justify-content-between pt-5">
                    {
                        countries.map(countries => <Country country={countries}></Country>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;