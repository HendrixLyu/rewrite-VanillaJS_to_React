import styled from 'styled-components';
import Layout from '../Layout';
import Client from './components/Client';

const Clients = () => {
    return ( 
    <Layout title="Clients">
        <Client />
        <Client />
        <Client />
    </Layout>
    );
}

export default Clients;