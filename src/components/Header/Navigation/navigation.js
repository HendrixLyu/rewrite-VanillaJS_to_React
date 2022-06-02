import  Item_Ddd  from './Items' //Item为可复用组件
// import './navigation.css' //CSS文件被styled-components完全替代
import styled from 'styled-components'; //使用styled-components可完全替代CSS

const Wrapper123 = styled.div`
    display: flex;
`

const Other_ITEMS = [
    { 
        Href_New:"BLOG.A",
        Text_New:" Blog_A",
    },{
        Href_New:"SERVICES2",
        Text_New:"Services02",
        need_active:true,
    },{
        Href_New:"RESUME",
        Text_New:"My-Resume",
    },{
        Href_New:"HOME4",
        Text_New:"<Home>",
    }]

const navigation_bar = () => {
    return ( 
        // <div className="navbar"> 用styled-components定义的Wapper123 改写||.css文件就不需要了
        <Wrapper123>
            <a className="navbar__item" href="HOME">Home</a>
            {/* 原始JSX写法 */}
            <a className="navbar__item" href="RESUME">myResume</a>
            {/* <Item_A href="RESUME" text_666="Resume" /> */} 
            <a className="navbar__item" href="SERVICES">Services</a> 
            {/*<Item_B href="SERVICES" text111="ServiceS" /> {/* Item_B后的参数均为props接收到的参数 */}
            <a className="navbar__item" href="BLOG">Blog</a>
            {/* <Item_C href_xyz="BLOG"  text_aaa="Blog"  is_Active/> */}
            <a className="navbar__item" href="CONTACT">Contact</a>
            <Item_Ddd href222="CONTACT0" check_Active> Contact_2 </Item_Ddd>
            {/* D为最最接近HTML的写法，需使用默认props参数:children */}
            {/* 传入更多参数,使用map方法操作Array: */}
            {Other_ITEMS.map(({Href_New, Text_New, need_active}) => (
                <Item_Ddd href222={Href_New} check_Active={need_active}> {Text_New} </Item_Ddd>
            ) )}
        </Wrapper123>
        // </div>
    )
};

export default navigation_bar;