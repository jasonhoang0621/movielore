import { LOAD_MOVIES_DATA, MENU_FILTER, HORIZONTAL_FILTER } from './constants';

export const loadMoviesDate = payload => ({
    type: LOAD_MOVIES_DATA,
    payload
})

export const filterMenu = payload => ({
    type: MENU_FILTER,
    payload
})

export const filterHorizontal = payload => ({
    type: HORIZONTAL_FILTER,
    payload
})