/**
 * Created by wangyl on 2018/9/7.
 */
import *as constants from './constants';
import {fromJS} from 'immutable'

const defaultState = fromJS({
    focus: false,
});
export default (state = defaultState, action) => {
    if (action.type == constants.SEARCHE_FOCUS) {
        //immutable 对象的set方法，会结合之前immutable 对象的值
        //和设置的值,返回一个全新的对象
        return state.set('focus',true)
        /*{
            focus: true
        }*/
    }
    if (action.type == constants.SEARCHE_BLUR) {
        return state.set('focus',false)
        /*{
            focus: false
        }*/
    }
    return state;
}