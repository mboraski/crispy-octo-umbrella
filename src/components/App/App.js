import React from 'react';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import SearchFormContainer from '../SearchFormContainer/SearchFormContainer';
import SeriesDataContainer from '../SeriesDataContainer/SeriesDataContainer';
import StreamAppContainer from '../StreamAppContainer/StreamAppContainer';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <HeaderContainer />
            <SearchFormContainer />
            <SeriesDataContainer />
            <StreamAppContainer />
        </div>
    );
};

export default App;
