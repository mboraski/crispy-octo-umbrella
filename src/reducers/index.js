import { combineReducers } from 'redux';
import { searchForm } from './searchFormReducer';
import { seriesData } from './seriesDataReducer';
import { userData } from './userReducer';
import { feedData } from './feedReducer';

const reducers = combineReducers({
    userData,
    searchForm,
    seriesData,
    feedData,
});

export default reducers;
