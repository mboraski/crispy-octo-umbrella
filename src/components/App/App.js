import React from 'react';
import SearchFormContainer from '../SearchFormContainer/SearchFormContainer';
import SeriesDataContainer from '../SeriesDataContainer/SeriesDataContainer';
import Header from '../Header/Header';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <SearchFormContainer />
            <SeriesDataContainer />
        </div>
    );
};

export default App;
