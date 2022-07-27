import styled from 'styled-components';

const Wrapper = styled.div`
    border: 3px dashed blue;
    padding:10px;
    margin:50px;
    width:50%;
    height:60vh;
    font-size:2rem;
    text-align:center;
`

const ResumePage = () => {
    return ( 
        <Wrapper>
            My
            <br/>
            《Resume》
            <hr/>
            。。。 。。。
        </Wrapper>
    );
}

export default ResumePage;