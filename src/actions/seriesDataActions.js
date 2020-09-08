import { seriesAPI } from '../apis/series';

export const actions = {
    SERIES_DATA_REQUEST: 'SERIES_DATA_REQUEST',
    SERIES_DATA_REQUEST_SUCCESS: 'SERIES_DATA_REQUEST_SUCCESS',
    SERIES_DATA_REQUEST_FAILURE: 'SERIES_DATA_REQUEST_FAILURE',
};

export const fetchSeriesData = () => async (dispatch, getState) => {
    dispatch({
        type: actions.SERIES_DATA_REQUEST,
    });
    try {
        const searchFormData = getState().searchForm;
        console.log(
            'seriesDataActions fetchSeriesData state: ',
            searchFormData
        );
        const response = await seriesAPI.get('/series-videos', {
            params: {
                seriesId: searchFormData.term,
            },
        });
        console.log('response: ', response);
        console.log('response.data: ', response.data);
        const data = {
            seriesHero: response.data.seriesHero,
            seriesTitle: response.data.seriesTitle,
            episodeList: response.data.episodeList,
            error: null,
        };
        return dispatch({
            type: actions.SERIES_DATA_REQUEST_SUCCESS,
            payload: data,
        });
    } catch (err) {
        return dispatch({
            type: actions.SERIES_DATA_REQUEST_FAILURE,
            payload: { error: err },
        });
    }
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
