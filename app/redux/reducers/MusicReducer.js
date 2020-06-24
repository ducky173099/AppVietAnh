import {
    GET_LIST_MUSIC,
    GET_SUCCSESS_LIST_MUSIC,
    GET_ERROR_LIST_MUSIC
} from '../actions/ActionTypes';

export const musicReducer = (state = {}, action) => {
    // console.log('kkkkkkkk:', action.type);

    switch(action.type){
        case GET_SUCCSESS_LIST_MUSIC:
            // console.log('gggggggg:', action.data);
            return {
                ...state,
                success: true,
                data: action.data
            };
        default:
            return state;
    }
};
  