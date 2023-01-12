import logoEakon from '../../../public/favicon-32x32.png'

const Header = () => {
    return(
        <header className="header">
            <nav className="nav">
                <div className="container f-elements--header">
                    <a>
                        <img src={logoEakon} alt="Logo de EAKON" className="nav__logo" width="32" height="32" />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;