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
        return {
            focus: true
        }
    }
    if (action.type == constants.SEARCHE_BLUR) {
        return {
            focus: false
        }
    }
    return state;
}