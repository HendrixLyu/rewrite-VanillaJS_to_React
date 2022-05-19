import './All_items.css'
import styled from 'styled-components' //在js内写`CSS`
//共ABCD四种写法
// A->直接通过props.传参
const Item_A = (props) => {
    // props展开写就是: const props={href:"RESUME" text_666:"Resume"},从<Item_A href="RESUME" text_666="Resume" />获得
    // 所以 props.href = "RESUME"
    return (  //return内部的内容将完整 显示在HTML中
        <a className="navbar__item" href_22={props.href}>
            {props.text_666}
        </a> 
    );
};

// B->对props解构赋值，再return
const Item_B = (props) => {
    const {href, text: pageText} = props //解构赋值
    return ( //return内部的内容均显示在HTML中
        <a className="navbar__item" href={href}>
            {pageText}
        </a> 
    );
};

// C-> 再传入is_Active变量,并设置默认值
// props接收到的参数为: <Item_Cccc href_xyz="BLOG"  text_aaa="Blog"  is_Active/>.
const Item_C = (props) => {
    const {href_xyz, text_aaa: pageName, is_Active=false} = props //解构赋值 //默认将is_Active设为false,不传值即默认false
    // console.log(href_1, is_Active)
    let className = "navbar__item"
    if (is_Active) {
        className += " navbar__item--active" }//前面必须加空格

    return ( 
        <a className={className} href_666={href_xyz}>
            {pageName}
        </a> 
    );
}
    //若不传值,默认为false 
    // Item_C.defaultProps = {
    //     is_Active: false,
    // };

    /* Html标签是div,就是styled.div`....`, 标签是a,就是styled.a`....` */
const Wrapper = styled.a` 
padding: 16px;
text-decoration: none;
color: #49515d;
font-size: 15px;
opacity: 0.6;
display: block;
transition: opacity 0.3s ease-in-out;
/* 用scss写法 */
::after {
    content: "";  
    width: 0;
    border-bottom: 3px solid #377e9a;
    margin: auto;
    margin-top: 4px;
    display: block;
    transition: width 0.3s ease-in-out;
}
:hover {
    opacity: 1;
    ::after {
        width: 24px;
    }
}
:last-of-type {
    padding-right: 0;

${({is_Active}) => is_Active &&`
    opacity:1;
    ::after {
        width:24px;
    }
`}
}
`
//D-> 使用children将innerHTML传进来的内容替代test_aaa.
    //默认将is_Active设为false,不传值即为默认值false
const Item_D = (props) => {
    const {href_1, is_Active=false, children} = props //解构赋值
    // let className = "navbar__item"
    // if (is_Active) {
    //     className += " navbar__item--active" } //前面必须加空格
    //将if改写成三元表达式:↓↓
    const className = is_Active ? 
                    'navbar__item navbar__item--active' :
                    'navbar__item';
    return ( //↓用styled-components替代CSS↓//
        // <a className={className} href_666={href_1}> {children} </a> 
        <Wrapper href_666={href_1} is_Active={is_Active}> 
            {children}
        </Wrapper>
    );
};

//导出组件
export default Item_D;