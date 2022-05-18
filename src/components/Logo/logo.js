// import './Logo_Style.css'
import styled from 'styled-components';//用styled-components替代CSS
import Highlight from '../HighLight';

const Wapper_LogoName = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
`
// const Wapper_Logo_Highlight = styled.span`
//     color: #377e9a;
// `//因为在其他地方可复用，单独写一个component

const site_Name = 'Tifa' 
const myLogoName = 'logo_666'

const logo_1 = () => {
    return ( 
        // <div className={ myLogoName }>
        //     <span className="logo__highlight">{ site_Name }</span>
        //     Lockhart
        // </div>
        // ↓用styled-components改写↓:
        <Wapper_LogoName>
            <Highlight>{site_Name}</Highlight>
            {'  '} { /* 加空格 */}
            Lockhart
        </Wapper_LogoName>
    )
};

export default logo_1; 