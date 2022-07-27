import styled from 'styled-components';
import './style.css'

const Wrapper2333 = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    border: 5px solid green;
    width:95%;
    height:550px;
`

const ContactPage = (props) => {
    return (
        <Wrapper2333>
            <div className='cont_left'>
                Tele_:
            </div>
            <div className='cont_right'>
                E-mail:
            </div>
        </Wrapper2333> 
    );
}

export default ContactPage;