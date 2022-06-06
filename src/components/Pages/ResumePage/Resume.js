import styled from 'styled-components';

const Wapper = styled.div`
    border: 3px dashed blue;
    padding:10px;
    margin:50px;
    width:50%;
    height:60vh;
    font-size:2rem;
`

const ResumePage = () => {
    return ( 
        <Wapper>
            My《Resume》。。。
        </Wapper>
    );
}

export default ResumePage;