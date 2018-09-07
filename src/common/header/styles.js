/**
 * Created by wangyl on 2018/9/3.
 */
import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWraper = styled.div`
height:58px;
border-bottom:1px solid #f0f0f0;
position:'relative',
`;
export const Logo = styled.a.attrs({
    href: '/'
})`
height:58px;
width:100px;
position:absolute;
top:0;
left:0;
display:block;
background:url(${logoPic});
background-size:contain;
`;
export const Nav = styled.div`
    width: 960px;
	height: 100%;
	box-sizing: border-box;
	margin: 0 auto;
	padding-right:70px;
`;
export const NavItem = styled.div`
line-height:58px;
padding:0 15px;
font-size:17px;
color:#333;
    &.left{
    float:left;
    }
    &.right{
    float:right;
    color:#969696
    }
    &.active{
    color:#ea6f5a;
    }
    `;
export const SearchWrapper = styled.div`{
    float:left;
    position:relative;
    .slide-enter{
    transition:all .2s ease-out;
    };
    .slide-enter-active{
    width:200px};
    .slide-exit{
    transition:all .2s ease-out;
    };
    .slide-exit-active{
    width:160px};
    
    .iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focus{
    background:#777;
    color:#fff
    }
    }
}`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
width：160px;
height:38px;
border-radius:19px;
margin-top:10px;
padding:0 30px 0 20px;
margin-left:20px
border:none;
outline:none;
background:#eee;
padding:0 20px;
font-size:14px;
color:#666;
&::placeholder{
color:#999}
&.focus{
width:200px;
}
`;
export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:58px;
`;
export const Button = styled.div`
float:right;
margin-top:10px;
margin-right:20px;
padding:0 20px;
line-height:38px;
border-radius:19px;
border:1px solid #ec6249;
fontSize:14px;
&.reg{
color:#ec6149}
&.writing{
color:#fff;
background:#ec6149}
`;
