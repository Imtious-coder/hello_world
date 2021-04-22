import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div>
            <section class="error-page">
                <div class="covers-main w3layouts">
                    <div class="wrapper">
                        <div class="main-cover w3">
                            <h1>
                                <a href="#" class="logo">Ooops Error...</a>
                            </h1>
                            <h4 class="cover-para w3ls">4<span class="fa fa-heart-o" aria-hidden="true"></span>00</h4>
                            <p class="form-text">Sorry, we're offline right now to make our site even better.
                        Please, come back later and check what we've been up to.</p>
                            <Link to="/home"><a href="index.html" class="back-button">Back to Home</a></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;