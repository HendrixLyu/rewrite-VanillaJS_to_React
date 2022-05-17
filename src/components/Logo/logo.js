import './Logo_All.css'

const site_Name = 'Tifa'
const myLogoName = 'logo_666'

const logo_1 = () => {
    return ( 
        <div className={ myLogoName }>
            <span className="logo__highlight">{ site_Name }</span>
            Lockhart
        </div>
    )
};

export default logo_1; 