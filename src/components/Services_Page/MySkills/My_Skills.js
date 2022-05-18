import styled from 'styled-components';
import Highlight from '../../HighLight';
import Skill from './components/Skill';
import Layout from '../Layout';

const MySkills = () => {
    return ( 
    <Layout 
        title={
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