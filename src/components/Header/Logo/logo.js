// import './Logo_Style.css'
import styled from "styled-components"; //用styled-components替代CSS文件
import Highlight from "../../HighLight"; //HighLight为一个多次复用的组件

const Wapper_LogoStyle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;
// const Wapper_Logo_Highlight = styled.span`
//     color: #377e9a;
// `//HighLight因为在多个地方可复用，单独提取为一个component

const siteName = "Tifa";
const myLogoName = "logo_666"; //将className设为变量

const LT = () => {
  return <span>Lockhart</span>;
}; //组件内部写组件,就不需要export

const logo_1 = () => {
  return (
    // <div className = { myLogoName }>
    //     <span className="logo__highlight">{ site_Name }</span>
    //     Lockhart
    // </div>
    // ↓用styled-components改写↓:
    <Wapper_LogoStyle>
      <Highlight>{siteName}</Highlight>
      {"  "} {/* 加空格 */}
      <LT />
      XXYYZZ
    </Wapper_LogoStyle>
  );
};

export default logo_1;
