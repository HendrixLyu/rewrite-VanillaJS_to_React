import styled, {css}from 'styled-components';
import ContactPage from './ContactPage';
import HomePage from './HomePage';
import ResumePage from './ResumePage';
import Services_Page from './Services_Page';
import Blog_Page from './BlogPage/Blog';

const Wapper123 = styled.div`
    display:flex;
    flex-direction: column;
`

const Item = styled.div` //仅用于显示激活页
    display:none;
    ${ ({ active }) => active && css`
        display: initial;
    `}
`

// const ACTIVE_PAGE = 'CONTACT-'

const All_Pages = ({activePage_Page}) => {
    return ( 
        // <Wapper123> //↓↓用CSS控制渲染
        //     <Item active = {false}> <HomePage /> </Item>
        //     <Item active > <ResumePage /> </Item>
        //     <Item> <Services_Page /> </Item>
        //     <Item active = {true}> <ContactPage /> </Item>
        // </Wapper123>
        <Wapper123> {/* ↓↓用短路计算控制渲染 */}
            {activePage_Page.valueName === 'HOME->' &&  <HomePage />}
            {activePage_Page.valueName === 'RESUME->' &&  <ResumePage />}
            {activePage_Page.valueName === 'BLOG->' &&  <Blog_Page />}
            {activePage_Page.valueName === 'SERVICE->' &&  <Services_Page />}
            {activePage_Page.valueName === 'CONTACT->' &&  <ContactPage />}
        </Wapper123>
    );
}

export default All_Pages;