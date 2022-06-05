import styled from 'styled-components';
import Highlight from '../../../HighLight/index';
import Skill from './components/Skill';
import Layout from '../Layout';

const MySkills = () => {
    return ( 
    <Layout 
        input_title={
            (<div>
            My {' '}
            <Highlight>Skill * 3 </Highlight></div>)
        }
    >
        <Skill />
        <Skill />
        <Skill />   
    </Layout>
    );
}

export default MySkills;