import Logo_333 from '../Logo'
import Navigation_222 from '../Navigation'
import './Header.css'

const Header_NameOne = () => (
    <header className="nav">
        <div className="nav__left">
            <Logo_333 />
        </div>

        <div className="nav__right">
            <Navigation_222 />
        </div>
    </header>
)

export default Header_NameOne