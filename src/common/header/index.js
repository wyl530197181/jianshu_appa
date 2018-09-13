/**
 * Created by wangyl on 2018/9/3.
 */
import React, {Component} from 'react';
import {
    HeaderWraper, Logo, Nav, NavItem, NavSearch, Addition,
    Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem
} from './styles.js'
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';

class Header extends Component {
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
                    {this.showInfoList()}
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

    showInfoList() {
        let pageList = [];
        const jsList = this.props.list && this.props.list.toJS();
        if (jsList.length) {
            for (let i = (this.props.page - 1) * 10; i < this.props.page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
                )
            }
        }
        if (this.props.focus || this.props.mouseIn) {
            return (
                <SearchInfo onMouseEnter={
                    this.props.handleMouseEnter
                }
                            onMouseLeave={
                                this.props.handleMouseLeave
                            }
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => {
                                this.props.handleChangePage(this.props.page, this.props.totalPage)}}>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => {//state 指的是state里面的数据
    return {
        focus: state.get('header').get('focus'),
        list: state.get('header').get('list'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
        mouseIn: state.get('header').get('mouseIn'),
    }
}
const mapDispatchToProps = (dispatch) => { // 组件和数据连接  相当于store.dispatch
    return {
        handleInputFoucus() {
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)