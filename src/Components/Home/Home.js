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
    const lol2 = document.getElementById("lol");
    lol2.addEventListener(onclick, function () {
        const lol3 = document.getElementById("Home");
        lol3.style.display = "none";
    })

    return (
        // UI here...
        <div>
            <section>
                <button id="lol">Click here...</button>
            </section>
            <section id="Home">
                <div className="container">
                    <div className="row d-flex justify-content-between pt-5">
                        {
                            countries.map(countries => <Country country={countries}></Country>)
                        }
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;