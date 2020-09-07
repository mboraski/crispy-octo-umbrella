import { seriesAPI } from '../apis/series';

export const actions = {
    SERIES_DATA_REQUEST: 'SERIES_DATA_REQUEST',
    SERIES_DATA_REQUEST_SUCCESS: 'SERIES_DATA_REQUEST_SUCCESS',
    SERIES_DATA_REQUEST_FAILURE: 'SERIES_DATA_REQUEST_FAILURE',
};

export const fetchSeriesData = () => async (dispatch, getState) => {
    const state = getState();
    console.log('seriesDataActions fetchSeriesData state: ', state);
    // const term = getState().term;
    // const response = await seriesAPI.get('/series-videos', {
    //     params: {
    //         seriesId: term,
    //     },
    // });
    return dispatch({
        type: actions.SERIES_DATA_REQUEST,
        payload: {},
    });
};

export const fetchSeriesDataFailure = () => {
    return {
        type: actions.SERIES_DATA_REQUEST_FAILURE,
        payload: {
            isFetching: false,
        },
    };
};

export const fetchSeriesDataSuccess = () => {
    return {
        type: actions.SERIES_DATA_REQUEST_SUCCESS,
        payload: {
            isFetching: false,
        },
    };
};
