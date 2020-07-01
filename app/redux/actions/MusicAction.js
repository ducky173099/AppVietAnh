import { GET_LIST_MUSIC, GET_SUCCSESS_LIST_MUSIC, GET_ERROR_LIST_MUSIC, TOGGLE_PLAYER_ACTION } from './ActionTypes';

export const getMusicAction = data => {
    return{
        type: GET_LIST_MUSIC,
        data
    }
};

export const getSuccessListMusic = data => {
    return{
        type: GET_SUCCSESS_LIST_MUSIC,
        data
    }
};

export const getErrorListMusic = message => {
    return{
        type: GET_ERROR_LIST_MUSIC,
        message
    }
};

export const togglePlayerAction = message => {
    return{
        type: TOGGLE_PLAYER_ACTION,
        message
    }
};
