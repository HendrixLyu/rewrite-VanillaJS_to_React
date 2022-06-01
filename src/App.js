import Header_Name2333 from './components/Header';
import Services_Page996 from './components/Services_Page';
// import './App.css'; //使用styled-components可完全替代CSS
import styled from 'styled-components'; // 快捷键:imsc

const Wapper_666 = styled.div`
  background-image: linear-gradient( to top left, #69c0ff 0%, #b7eb8f 100%);
`

const Container111 = styled.div`
  max-width: 1000px;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// 任何component首字母强制大写
const App = () => ( //return()可不写
    /* <div className = 'container'> */
  <Wapper_666>
    <Container111>
      <Header_Name2333 /> 
      <Services_Page996 />
      <Services_Page996 />
    </Container111>
  </Wapper_666>
    /* </div> */
)

export default App;
