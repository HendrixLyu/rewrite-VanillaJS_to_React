import styled from 'styled-components'; //快捷键imsc
import Clients from './Clients';
import MySkills from './MySkills';

const Wapper = styled.div`
    background: #fff;
    border-radius:25px;
    overflow: hidden;
    box-shadow: 0px 15px 25px 0px rgb( 0 0 0 / 20%);
`
const Title = styled.h2`
    margin: 0;
    text-align: center;
    font-size:44px;
    padding: 32px 64px;
    background-color: #377e9a;
    color: #fff;
`
const Content = styled.div`
    padding: 32px 64px;
`
//快捷键sfc
const ServicePage = () => {
    return (
        <Wapper>
            <Title>
                Services
            </Title>
            <Content>
                <MySkills />
                <Clients />
            </Content>
        </Wapper>
    );
}
 
export default ServicePage;