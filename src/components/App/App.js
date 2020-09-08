import React from 'react';
import SearchFormContainer from '../SearchFormContainer/SearchFormContainer';
import SeriesDataContainer from '../SeriesDataContainer/SeriesDataContainer';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <header className="app__header row">
                <h1>{`Hello!  This is the <App /> component!  Please render your UI in .app__body below`}</h1>
            </header>
            <div className="app__body">
                <SearchFormContainer />
                <SeriesDataContainer />
            </div>
        </div>
    );
};

export default App;
