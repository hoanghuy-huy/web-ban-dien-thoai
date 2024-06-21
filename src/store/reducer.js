import { SHOW_AUTH_FORM } from "./Constants";

const initState = {
    showAuthForm: false,
};

function reducer(state, action) {
    switch (action.type) {
        case SHOW_AUTH_FORM:
            return {
                showAuthForm : action.payload
            };
        default:
            throw new Error('Invalid actions');
    }
}

export { initState };
export default reducer;
