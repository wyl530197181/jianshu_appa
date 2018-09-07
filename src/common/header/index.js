/**
 * Created by wangyl on 2018/9/3.
 */
import React, {Component} from 'react';
import {HeaderWraper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './styles.js'
import {CSSTransition} from 'react-transition-group';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
        }
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
                        in={this.state.focus}
                        timeout={200}
                        classNames={'slide'}
                    >
                        <NavSearch
                            onFocus={() => {
                                this.handleInputFoucus()
                            }}
                            onBlur={() => {
                                this.handleInputBlur()
                            }}
                            className={this.state.focus ? 'focus' : ''}/>
                    </CSSTransition>
                    <i className={this.state.focus ? 'focus iconfont' : 'iconfont'}>&#xe637;</i>
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

    handleInputFoucus() {
        this.setState({
            focus: true
        })
    }

    handleInputBlur() {
        this.setState({
            focus: false
        })
    }
}