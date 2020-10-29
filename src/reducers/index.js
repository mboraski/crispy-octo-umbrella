import { combineReducers } from 'redux';
import { searchForm } from './searchFormReducer';
import { seriesData } from './seriesDataReducer';
import { userData } from './userReducer';

const reducers = combineReducers({
    userData,
    searchForm,
    seriesData,
});

export default reducers;
