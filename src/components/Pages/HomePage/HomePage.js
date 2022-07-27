import styled from 'styled-components';

const Wrapper666 = styled.div`
    font-size:2.5rem;
    color: #000;
    width:70%;
    height:50vh;
    background-image: linear-gradient( to top right, #bcaa11 0%, #efabef 100%);
    opacity:0.6;
    box-shadow: 
    10px 10px 25px rgba(255,255,255,0.5),
    10px 10px 20px rgba(255,255,255,0.5),
    inset -5px -5px 15px rgba(0,0,0,0.5),
    inset 5px 5px 15px rgba(0,0,0,0.25);
`

const HomePage = (props) => {
    return ( 
        <Wrapper666>
            <p>Home🏠</p>
        </Wrapper666>
    );
}

export default HomePage;