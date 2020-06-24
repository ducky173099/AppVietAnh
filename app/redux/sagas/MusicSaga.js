import {
    GET_LIST_MUSIC,
    GET_SUCCSESS_LIST_MUSIC
} from '../actions/ActionTypes';
import {
    getMusicAction,
    getSuccessListMusic
} from '../actions/MusicAction';
import {put, takeLatest} from 'redux-saga/effects';
import qs from 'qs';


const DataMusic = [
    {
        id: 1,
        name: 'Bốn Mùa Tình Ca',
        single: 'Việt Anh & 5 Dòng Kẻ'
    },
    {
        id: 2,
        name: 'Câu Chuyện Của Cha',
        single: 'Việt Anh & Trung Quân Idol'
    },
    {
        id: 3,
        name: 'Câu Chuyện Mùa Xuân',
        single: 'Hợp Xướng Nhà Hát Giao Hưởng...'
    },
    {
        id: 4,
        name: 'Chạm Thật Khẽ Giấc Mơ',
        single: 'Việt Anh & Lân Nhã'
    },
    {
        id: 5,
        name: 'Chỉ Mùa Xuân Mới Hiểu',
        single: 'VIệt Anh & Đình Bảo'
    },
    {
        id: 6,
        name: 'Chiều Biển Vắng Thênh Thang',
        single: 'Việt Anh & Thu Phương'
    },
    {
        id: 7,
        name: 'Chờ Anh Em Nhé',
        single: 'Việt Anh & Thu Phương'
    },
    {
        id: 8,
        name: 'Chưa Bao Giờ',
        single: 'Việt Anh & Thu Phương'
    },
];

export function* watchGetListMusicAction(){
    yield takeLatest(GET_LIST_MUSIC, getListMusic);
};

function* getListMusic(action){
    try {
        // const param = {
        //     // Music: DataMusic
        //     aaa: action.data
        // };

        

        // console.log('param: ', param);

        yield put(getSuccessListMusic(DataMusic));
    } catch (error) {
        
    }
};