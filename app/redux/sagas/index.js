import {all} from 'redux-saga/effects';

import {
    watchGetListMusicAction
} from './MusicSaga';

export default function* rootSaga() {
    yield all([
        watchGetListMusicAction(),
        
    ]);
}
