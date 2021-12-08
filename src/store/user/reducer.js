import { STORE_LOGIN_ACCOUNT } from './constant';

const initState = {
    isLoading: true,
    name: null,
    email: null,
    password: null,
    role: false
}

function reducer(state, action) {
    switch (action.type) {
        case STORE_LOGIN_ACCOUNT:
            return {
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                role: action.payload.role
            }
        default:
            throw new Error('user invalid action');
    }
}

export { initState };
export default reducer;