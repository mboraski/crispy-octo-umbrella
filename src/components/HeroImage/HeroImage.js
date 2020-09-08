import React from 'react';
import './HeroImage.css';

const HeroImage = (props) => {
    return (
        <div className="hero-image-wrapper">
            <img
                className="hero-image"
                src={props.seriesHero}
                alt="Series Hero"
            />
        </div>
    );
};

export default HeroImage;
