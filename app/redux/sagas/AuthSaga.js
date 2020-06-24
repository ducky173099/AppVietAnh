
import {
    LOGIN_ACTION,
    LOGIN_ACTION_ERROR,
    LOGIN_ACTION_SUCCESS,
} from '../actions/ActionTypes';

// import {
//     loginAction,
// } from '../actions/AuthAction';
import {put, takeLatest} from 'redux-saga/effects';
import qs from 'qs';