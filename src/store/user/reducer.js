import { STORE_LOGIN_ACCOUNT, LOGOUT_ACCOUNT, STORE_NEW_INFORMATION, CHANGE_NEW_PASSWORD } from './constant';

const initState = {
    id: null,
    name: null,
    email: null,
    password: null,
    role: false
}

function reducer(state, action) {
    switch (action.type) {
        case STORE_LOGIN_ACCOUNT:
            return {
                id: action.payload._id,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                role: action.payload.role
            }
        case LOGOUT_ACCOUNT:
            return {
                name: null,
                email: null,
                password: null,
                role: false
            }
        case STORE_NEW_INFORMATION:
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name,
            }
        case CHANGE_NEW_PASSWORD:
            return {
                ...state,
                password: action.payload,
            }
        default:
            throw new Error('user invalid action');
    }
}

export { initState };
export default reducer;