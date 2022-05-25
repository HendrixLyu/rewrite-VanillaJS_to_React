import styled from 'styled-components';

const Wapper = styled.div`
    margin:32px 0;
`
const Title = styled.h3`
    margin: 0;
    font-size:18px;

`
const ContentDetail = styled.div`
    margin-top:32px;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
`

const Layout = ({input_title:Title_666, children}) => {
    return ( 
        <Wapper> 
            <Title>
                {Title_666}
            </Title>
            <ContentDetail>
                {children}
            </ContentDetail>
        </Wapper>
    );
}

export default Layout;