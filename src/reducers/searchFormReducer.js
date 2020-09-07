import { actions } from '../actions/searchFormActions';

const initialState = {
    term: '',
};

const searchForm = (state = initialState, action) => {
    switch (action.type) {
        case actions.UPDATE_TERM:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export { searchForm };
