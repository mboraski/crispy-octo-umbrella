import React from 'react';

const HeroImage = (props) => {
    return (
        <div>
            <img src={props.seriesHero} alt="Series Hero" />
        </div>
    );
};

export default HeroImage;
