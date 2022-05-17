import './items.css'

// A->直接通过props.传参
const Item_A = (props) => {
    // props展开写就是: const props={href:"RESUME" text_666:"Resume"}
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
    return ( 
        <a className="navbar__item" href={href}>
            {pageText}
        </a> 
    );
};

// C-> 再传入is_Active变量,并设置默认值
const Item_C = (props) => {
    const {href_xyz, text_aaa: pageName, is_Active=false} = props //解构赋值
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

//D-> 使用children将innerHTML传进来的内容替代teat_aaa.
    //默认将is_Active设为false,不传值即为默认值false
const Item_D = (props) => {
    const {href_1, is_Active=false, children} = props //解构赋值
    
    // let className = "navbar__item"
    // if (is_Active) {
    //     className += " navbar__item--active" } //前面必须加空格
    //将if改写成三元表达式或者短路计算
    const className = is_Active 
        ? 'navbar__item navbar__item--active' 
        : 'navbar__item'

    return ( //return内部的内容均显示在HTML中
        <a className={className} href_666={href_1}>
            {children}
        </a> 
    );
};

//导出组件
export default Item_C