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

const Layout = ({title, children}) => {
    return ( 
        <Wapper>
            <Title>
                {title}
            </Title>
            <ContentDetail>
                {children}
            </ContentDetail>
        </Wapper>
    );
}

export default Layout;