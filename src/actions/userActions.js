import { authAPI } from '../apis/gaiaAuth';

export const actions = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS',
    LOGIN_REQUEST_FAILURE: 'LOGIN_REQUEST_FAILURE',
};

export const login = () => async (dispatch) => {
    dispatch({
        type: actions.LOGIN_REQUEST,
    });
    try {
        const response = await authAPI.post('/login');
        const data = {
            id: response.data.id,
            name: response.data.name,
            image: response.data.image,
            authToken: response.data.token,
            error: null,
        };
        return dispatch({
            type: actions.LOGIN_REQUEST_SUCCESS,
            payload: data,
        });
    } catch (err) {
        return dispatch({
            type: actions.LOGIN_REQUEST_FAILURE,
            payload: { error: err },
        });
    }
};

export const logout = () => async (dispatch) => {
    console.log('logged out');
};
