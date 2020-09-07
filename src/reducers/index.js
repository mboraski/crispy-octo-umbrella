import { combineReducers } from 'redux';
import { searchForm } from './searchFormReducer';
import { seriesData } from './seriesDataReducer';

const reducers = combineReducers({
    searchForm,
    seriesData,
});

export default reducers;
