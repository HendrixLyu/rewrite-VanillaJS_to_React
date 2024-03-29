import Logo_333 from './Logo'
import Navigation_222 from './Navigation'
// import './Header.css' //用styled-components替代CSS文件
import styled from 'styled-components' //快捷键imsc

const Wrapper456 = styled.header`
    padding: 15px 0;
    display: flex;
    align-items: center;
`
const Wap_Left = styled.div`
    flex: 1;
`

const Header_NameOne = ( {activePage_Header, setActivePage_Header} ) => (
    // <header className="nav"> 被Wrapper456 替换
    <Wrapper456>
        {/* <div className="nav__left"> 被Wap_Left替换 */}
        <Wap_Left>
            <Logo_333 />
        </Wap_Left>
        {/* </div> */}

        <div className="nav__right">
            <Navigation_222 active_Page_NavBar={activePage_Header} setActive_Page_NavBar={setActivePage_Header}/>
        </div>
    </Wrapper456>
    // </header>
)

export default Header_NameOne