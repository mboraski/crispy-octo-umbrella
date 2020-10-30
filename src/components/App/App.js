import React from 'react';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import StreamAppContainer1 from '../StreamAppContainer/StreamAppContainer1';
import StreamAppContainer2 from '../StreamAppContainer/StreamAppContainer2';
import StreamAppContainer3 from '../StreamAppContainer/StreamAppContainer3';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <HeaderContainer />
            <div className="stream-app-container">
                <div className="stream-app-container__column">
                    <StreamAppContainer1 />
                </div>
                <div className="stream-app-container__column">
                    <StreamAppContainer2 />
                </div>
                <div className="stream-app-container__column">
                    <StreamAppContainer3 />
                </div>
            </div>
        </div>
    );
};

export default App;
