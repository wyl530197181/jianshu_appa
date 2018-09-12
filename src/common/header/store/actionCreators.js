/**
 * Created by wangyl on 2018/9/10.
 */
import *as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';
export const searchFocus = () => ({
    type: constants.SEARCHE_FOCUS
});
export const searchBlur = () => ({
    type: constants.SEARCHE_BLUR
});
export const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data:fromJS(data),
});
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            let data = res.data;
            dispatch(changeList(data.data))
        }).catch((error) => {
            console.log(error)
        })
    }
}