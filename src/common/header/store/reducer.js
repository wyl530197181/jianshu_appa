/**
 * Created by wangyl on 2018/9/7.
 */
import *as constants from './constants';
import {fromJS} from 'immutable'

const defaultState = fromJS({
    focus: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false,
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCHE_FOCUS:
            //immutable 对象的set方法，会结合之前immutable 对象的值
            //和设置的值,返回一个全新的对象
            /*{focus: true}*/
            return state.set('focus', true)
        case constants.SEARCHE_BLUR:
            return state.set('focus', false)
        case constants.CHANGE_LIST:
            return state.set('list', action.data).set('totalPage', action.totalPage)
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
        default :
            return state;
    }
}