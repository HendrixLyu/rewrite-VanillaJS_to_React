import styled, {css}from 'styled-components';
import HomePage from './HomePage';
import ResumePage from './ResumePage';
import Services_Page from './Services_Page';

const Wapper = styled.div`
    display:flex;
    flex-direction: column;
`

const Item = styled.div`
    display:none;

    ${ ({ active }) => active && css`
        display: initial;
    `}
`

const All_Pages = () => {
    return ( 
        <Wapper>
            <Item active = {false}> <HomePage /> </Item>
            <Item active > <ResumePage /> </Item>
            <Item > <Services_Page /> </Item>
        </Wapper>
    );
}

export default All_Pages;