import { actions } from '../actions/seriesDataActions';

const initialState = {
    seriesHero: '',
    seriesId: '',
    seriesTitle: '',
    episodeList: [],
    isFetching: false,
    error: null,
};

const seriesData = (state = initialState, action) => {
    switch (action.type) {
        case actions.SERIES_DATA_REQUEST:
            return { ...state, ...initialState, isFetching: true };
        case actions.SERIES_DATA_REQUEST_SUCCESS:
            return { ...state, ...action.payload, isFetching: false };
        case actions.SERIES_DATA_REQUEST_FAILURE:
            return { ...state, ...action.payload, isFetching: false };
        default:
            return state;
    }
};

export { seriesData };
