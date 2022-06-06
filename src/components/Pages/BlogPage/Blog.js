import styled from 'styled-components';

const Wapper_B = styled.div`
    width:800px;
    height:550px;
    border:5px solid orange;
    border-radius:50px;
    text-align:center;
    font-size:3rem;
`

const Blog_Page = () => {
    return ( 
        <Wapper_B>
            Blogs:
        </Wapper_B>
    );
}

export default Blog_Page;