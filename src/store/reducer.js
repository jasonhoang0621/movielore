import { LOAD_MOVIES_DATA, MENU_FILTER, HORIZONTAL_FILTER } from './constants'

const initState = {
    movies: [],
    filter: [],
    finalFilter: [],
    isFinalFilter: false
}

function reducer(state, action) {
    switch (action.type) {
        case LOAD_MOVIES_DATA:
            return {
                ...state,
                movies: action.payload,
                filter: action.payload
            }
        case MENU_FILTER:
            return {
                ...state,
                filter: action.payload,
            }
        case HORIZONTAL_FILTER:
            return {
                ...state,
                finalFilter: action.payload
            }
        default:
            throw new Error('Invalid action')
    }
}

export { initState };
export default reducer;