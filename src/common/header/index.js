/**
 * Created by wangyl on 2018/9/3.
 */
import React, {Component} from 'react';
import {HeaderWraper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './styles.js'
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators } from './store';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<HeaderWraper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登陆</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={this.props.focus}
                        timeout={200}
                        classNames={'slide'}
                    >
                        <NavSearch
                            onFocus={
                                this.props.handleInputFoucus
                            }
                            onBlur={
                                this.props.handleInputBlur
                            }
                            className={this.props.focus ? 'focus' : ''}/>
                    </CSSTransition>
                    <i className={this.props.focus ? 'focus iconfont' : 'iconfont'}>&#xe637;</i>
                </SearchWrapper>
                <Addition>
                    <Button className='writing'>
                        <i className="iconfont">&#xe615;</i>
                        写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </Nav>
        </HeaderWraper>)
    }

}

const mapStateToProps = (state) => {//state 指的是state里面的数据
    return {
        focus: state.header.focus
    }
}
const mapDispatchToProps = (dispatch) => { // 组件和数据连接  相当于store.dispatch
    return {
        handleInputFoucus() {
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)