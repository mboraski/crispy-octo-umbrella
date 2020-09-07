export const actions = {
    UPDATE_TERM: 'UPDATE_TERM',
};

export const updateSearchTerm = (term) => {
    return {
        type: actions.UPDATE_TERM,
        payload: {
            term,
        },
    };
};
