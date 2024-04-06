import React from 'react'
import { Link } from "react-scroll";

const HeroSection = () => {
    return (
       <section className='hero' >
        <img src="/restaurant.jpg" alt="restaurant"/>
        <div className="item">
            <h3>dream maker</h3>
            <div>
                <h1>Your personal Dream Maker</h1>
                <p>we believe that it is all about the big dreams and the small 
                   details!
                </p>
                <Link >BOOK NOW</Link>
            </div>

        </div>

       </section>
    );
};

export default HeroSection
