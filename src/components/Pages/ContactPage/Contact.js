import styled from 'styled-components';
import './style.css'

const Wapper2333 = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    border: 5px solid green;
    width:95%;
    height:550px;
`

const ContactPage = (props) => {
    return (
        <Wapper2333>
            <div className='cont_left'>
                Tele:
            </div>
            <div className='cont_right'>
                E-mail:
            </div>
        </Wapper2333> 
    );
}

export default ContactPage;