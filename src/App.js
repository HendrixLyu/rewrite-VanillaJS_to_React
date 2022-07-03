import Header_Name2333 from "./components/Header";
import Pages from "./components/Pages";
// import './App.css'; //使用styled-components可完全替代CSS
import styled from "styled-components"; // 快捷键:imsc
import React, { useState } from "react"; //用useState控制状态

const Wapper_666 = styled.div`
  background-image: linear-gradient(to top left, #69c0ff 0%, #b7eb8f 100%);
`;

const Container111 = styled.div`
  max-width: 1000px;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// let ACTIVE_PAGE = { valueName: 'SERVICE->' }; //转入useState
// 任何component首字母强制大写
const App = () => {
  //return()可不写
  /* <div className = 'container222'> */
  const [activePage, setActivePage] = useState("SERVICE->"); //useState()内为初始值为, useState返回值是一个Array,将返回值解构,第一项为当前状态值;第二项为状态更新函数,这个函数接收想要更新的状态值作为参数 //所有动态数据都用useState(异步更新,即:更新后不会立刻拿到新数据)

  return (
    <Wapper_666>
      <Container111>
        <Header_Name2333
          activePage_Header={activePage}
          setActivePage_Header={setActivePage}
        />
        <Pages activePage_Page={activePage} />
      </Container111>
    </Wapper_666>
    /* </div> */
  );
};

export default App;
