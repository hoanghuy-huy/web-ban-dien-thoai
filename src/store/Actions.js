import { SHOW_AUTH_FORM } from "./Constants";

const showAuthForm = (payload) => ({
    type: SHOW_AUTH_FORM,
    payload
})

export { showAuthForm }