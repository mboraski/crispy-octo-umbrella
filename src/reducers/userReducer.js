import { actions } from '../actions/userActions';

const initialState = {
    id: '',
    name: '',
    image: '',
    authToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZ2FpYSJ9.DLqsk2g67N6hpxiq68vyUtTun9VdYgSSov78u2ZkvsY',
    isFetching: false,
    error: null,
};

const userData = (state = initialState, action) => {
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

export { userData };
