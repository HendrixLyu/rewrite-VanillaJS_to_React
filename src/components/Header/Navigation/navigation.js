import  Item_Ddd  from './Items' //Item为可复用组件

// import './navigation.css' //被styled-components完全替代
import styled from 'styled-components'; //使用styled-components可完全替代CSS

const Wrapper123 = styled.div`
    display: flex;
`

const Other_ITEMS = [{
        Href_New:"AA--AA",
        Text_New:"aa+aa",
    },{
        Href_New:"BB|BB",
        Text_New:"bb&bb",
        need_active:true,
    },{
        Href_New:"CC~CC",
        Text_New:"cc^cc",
    },{
        Href_New:"DD//DD",
        Text_New:"dd>>dd",
    }]

const navigation_1 = () => {
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
            <Item_Ddd href222="CONTACT" check_Active> Contact </Item_Ddd>
            {/* D为最最接近HTML的写法，需使用默认props参数:children */}
            {/* 传入更多参数,使用map方法操作Array: */}
            {Other_ITEMS.map(({Href_New, Text_New, need_active}) => (
                <Item_Ddd href222={Href_New} check_Active={need_active}> {Text_New} </Item_Ddd>
            ) )}
            
        </Wrapper123>
        // </div>
    )
};

export default navigation_1;