import {combineReducers} from 'redux';
import {authReducer} from './AuthReducer';
import {musicReducer} from './MusicReducer';

const reducers = combineReducers({
  musicReducer
});
export default reducers;
