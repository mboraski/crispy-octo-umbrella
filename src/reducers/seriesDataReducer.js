import { actions } from '../actions/seriesDataActions';

const initialState = {
    seriesHero: '',
    seriesTitle: '',
    episodeList: [],
    isFetching: false,
    error: null,
};

const seriesData = (state = initialState, action) => {
    switch (action.type) {
        case actions.SERIES_DATA_REQUEST:
            return { ...state, ...action.payload };
        case actions.SERIES_DATA_REQUEST_SUCCESS:
            return { ...state, ...action.payload };
        case actions.SERIES_DATA_REQUEST_FAILURE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export { seriesData };
