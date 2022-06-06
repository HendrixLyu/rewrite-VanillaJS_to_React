import React from 'react'
import Item_C from './Items'
import  Item_D  from './Items' //Item为可复用组件
// import './navigation.css' //CSS文件被styled-components完全替代
import styled from 'styled-components'; //使用styled-components可完全替代CSS

//用<Wapper123>代替<div className="navbar">
const Wrapper123 = styled.div`
    display: flex;
`

const Other_ITEMS = [
    { 
        Href_New:"BLOG.1",
        Text_New:" Blog1",
        need_active:"BLOG->",
    },{
        Href_New:"SERVICES2",
        Text_New:"Services1",
        need_active:"SERVICE->",
    },{
        Href_New:"RESUME1",
        Text_New:"Resume1",
        need_active:"RESUME->",
    },{
        Href_New:"HOME+1",
        Text_New:"Home1",
        need_active:"HOME->",
    }]

const  navigation_bar = ( {active_Page_NavBar} ) => {
    return ( 
        // <div className="navbar"> 用styled-components定义的Wapper123 改写||.css文件就不需要了
        <Wrapper123>
            <a className="navbar__item" href="HOME">Home</a>
            {/* ↑↑原始JSX写法 */}
            <a className="navbar__item" href="RESUME">myResume</a>
            {/* <Item_A href="RESUME" text_666="Resume" /> */} {/* ←↓用props传参几种写法 */}
            <a className="navbar__item" href="SERVICES">Services</a> 
            {/*<Item_B href="SERVICES" text111="ServiceS" /> {/* Item_B后的参数均为props接收到的参数 */}
            <a className="navbar__item" href="BLOG">Blog</a>
            {/* <Item_C href_xyz="BLOG"  text_aaa="Blog"  is_Active={true}或is_Active/> */}
            <a className="navbar__item" href="CONTACT">Contact</a>
            <Item_D href222="CONTACT0" check_Active={active_Page_NavBar === 'CONTACT->'}> Contact1 </Item_D>
            {/* D为最最接近HTML的写法，需使用默认props参数:children */}
            {/* 传入更多参数,使用map方法操作Array: */}
            {Other_ITEMS.map(({Href_New, Text_New, need_active}) => (
                <Item_D 
                    href222 = {Href_New} 
                    check_Active = {active_Page_NavBar.valueName === need_active}
                    onClick = {(event) => {
                        event.preventDefault()
                        active_Page_NavBar.valueName = need_active;
                        console.log(active_Page_NavBar.valueName);
                    }}
                > 
                    {Text_New} 
                </Item_D>
            ) )}
        </Wrapper123>
        // </div>
    )
};

export default navigation_bar;