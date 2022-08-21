import styled from 'styled-components';

const Wrapper_B = styled.div`
    width:800px;
    height:550px;
    border:5px solid orange;
    border-radius:50px;
    text-align:center;
    font-size:3rem;
    background:url("https://www.word-nerds.com.au/wp-content/uploads/2018/03/Blog-image.jpg");
    & span{
        background-color: #5f785f;
        color:#fff;
    }
`

const Blog_Page = () => {
    return ( 
        <Wrapper_B>
            <span>Blog_111:</span>
            <input></input>
        </Wrapper_B>
    );
}

export default Blog_Page;