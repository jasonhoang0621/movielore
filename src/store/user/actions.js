import { STORE_LOGIN_ACCOUNT } from './constant';

//store account after login
export const StoreAccount = (payload) => ({
    type: STORE_LOGIN_ACCOUNT,
    payload
})