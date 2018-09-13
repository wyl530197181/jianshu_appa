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
    type: constants.SEARCHE_BLUR,

});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER,
});
export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE,
});
export const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10),

});
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            let data = res.data;
            console.log(data);
            dispatch(changeList(data.data))
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const changePage=(page)=>({
    type: constants.CHANGE_PAGE,
    page
})