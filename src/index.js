import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App2323 from "./App";
// import reportWebVitals from './reportWebVitals';

const rootABC = ReactDOM.createRoot(document.getElementById("root123"));

//JSX, write xml/Html like language in JavaScript. 所以写的越像html越好!!!
//index,js is React-Js gateway
const boolValue = 1;

// rootABC.render(boolValue ? <div>Hello World!!!</div> : <div>Bye~bye~</div>);//将react挂在rootA上

rootABC.render(
  //render:渲染
  <App2323 />
);

// setInterval(() => {
//     console.log('re-render')
//     rootABC.render(
//         <App2323 />
//     );
// }, 2000) //2秒刷新一次App2323,可实现动态刷新->但极其消耗资源!!!
