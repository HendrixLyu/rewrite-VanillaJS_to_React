import  Item_Cccc  from './items'

import './navigation.css'

const Other_ITEMS = [
    {
        Href_New:"AA--AA",
        Text_New:"aa,aa"
    },{
        Href_New:"B+BB",
        Text_New:"bb_bb",
        is_Active:true,
    },{
        Href_New:"CC&CC",
        Text_New:"cc|cc"
    },
]

const navigation_1 = () => {
    return ( 
        <div className="navbar">
            <a className="navbar__item" href="HOME">Home</a>
            {/* 原始JSX写法 */}
            <a className="navbar__item" href="RESUME">myResume</a>
            {/* <Item_A href="RESUME" text_666="Resume" /> */} 
            <a className="navbar__item" href="SERVICES">Services</a>
            {/* <Item_B href="SERVICES" pageText="Services" /> */} {/* Item_B后的参数均为props接收到的参数 */}
            <a className="navbar__item" href="BLOG">Blog</a>
            <Item_Cccc href_xyz="BLOG"  text_aaa="Blog"  is_Active/>
            <a className="navbar__item" href="CONTACT">Contact</a>
            {/* <Item_D href_1="CONTACT" is_Active>Contact</Item_D> */}
            {/* 最最接近HTML的写法，需使用默认参数:children */}
            
            {Other_ITEMS.map(({Href_New, Text_New, is_Active}) => (
                <Item_Cccc href_xyz={Href_New} text_aaa={Text_New} is_Active={is_Active} />
            ) )}
        </div>
    )
};

export default navigation_1;