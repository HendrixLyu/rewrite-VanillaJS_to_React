import  Item_Cccc  from './Items' //Item为可复用组件

// import './navigation.css' //被styled-components完全替代
import styled from 'styled-components'; //使用styled-components可完全替代CSS

const Wrapper123 = styled.div`
    display: flex;
`

const Other_ITEMS = [{
        Href_New:"AA--AA",
        Text_New:"aa+aa"
    },{
        Href_New:"BB|BB",
        Text_New:"bb&bb",
        is_Active:true,
    },{
        Href_New:"CC^CC",
        Text_New:"cc^cc"
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
            {/* <Item_B href="SERVICES" pageText="Services" /> */} {/* Item_B后的参数均为props接收到的参数 */}
            <a className="navbar__item" href="BLOG">Blog</a>
            {/* <Item_Cccc href_xyz="BLOG"  text_aaa="Blog"  is_Active/> */}
            <a className="navbar__item" href="CONTACT">Contact</a>
            {/* <Item_D href_1="CONTACT" is_Active>Contact</Item_D> */}
            {/* D为最最接近HTML的写法，需使用默认参数:children */}
            {/* 传入更多参数 map方法: */}
            {Other_ITEMS.map(({Href_New, Text_New, is_Active}) => (
                <Item_Cccc href_xyz={Href_New} text_aaa={Text_New} is_Active={is_Active} />
            ) )}
            
        </Wrapper123>
        // </div>
    )
};

export default navigation_1;