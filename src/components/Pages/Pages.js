import styled, {css}from 'styled-components';
import ContactPage from './ContactPage';
import HomePage from './HomePage';
import ResumePage from './ResumePage';
import Services_Page from './Services_Page';
import Blog_Page from './BlogPage/Blog';

const Wrapper123 = styled.div`
    display:flex;
    flex-direction: column;
`

const Item666 = styled.div` //仅用于显示激活页
    display:none;
    ${ ({ active }) => active && css`
        display: initial;
    `}
`

// const ACTIVE_PAGE = 'CONTACT-'

const All_Pages = ({activePage_Page}) => {
    return ( 
        // <Wrapper123> //↓↓用CSS控制渲染
        //     <Item666 active = {false}> <HomePage /> </Item666>
        //     <Item666 active > <ResumePage /> </Item666>
        //     <Item666> <Services_Page /> </Item666>
        //     <Item666 active = {true}> <ContactPage /> </Item666>
        // </Wrapper123>
        <Wrapper123> {/* ↓↓用短路计算控制渲染 */} 
            {activePage_Page === 'HOME->' &&  <HomePage />}
            {activePage_Page === 'BLOG->' &&  <Blog_Page />}
            {activePage_Page === 'RESUME->' &&  <ResumePage />}
            {activePage_Page === 'SERVICE->' &&  <Services_Page />}
            {activePage_Page === 'CONTACT->' &&  <ContactPage />}
        </Wrapper123>
    );
}

export default All_Pages;