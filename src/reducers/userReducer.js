import { actions } from '../actions/userActions';

const initialState = {
    id: 'gaia',
    name: 'Gaia',
    image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.technobezz.com%2Fhow-to-change-site-language-on-gaia%2F&psig=AOvVaw2-gZcvHTcENhIB5F0Nq94O&ust=1604076296716000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjS74Kg2uwCFQAAAAAdAAAAABAJ',
    authToken: '',
    isFetching: false,
    error: null,
};

const userData = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN_REQUEST:
            return { ...state, ...initialState, isFetching: true };
        case actions.LOGIN_REQUEST_SUCCESS:
            return { ...state, ...action.payload, isFetching: false };
        case actions.LOGIN_REQUEST_FAILURE:
            return { ...state, ...action.payload, isFetching: false };
        default:
            return state;
    }
};

export { userData };
