/**
 * Created by wangyl on 2018/9/7.
 */
import {createStore}from 'redux';
import reducer from './reducer';
const store=createStore(reducer);
export default store ;