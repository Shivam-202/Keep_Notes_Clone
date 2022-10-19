
import logo from '../logoImg/keep.png';

const Header = () => {

    let headerCss = {
        backgroundColor: 'white',
        padding: '4px'
    }

    return (
        <>
            <nav className="navbar navbar-light bg-warning">
                <div className="container-fluid">
                    <a style={headerCss} className="navbar-brand" href="#">
                        <img src={logo} alt="" width="40" height="50" className="d-inline-block align-text-center" />
                        <h4>Keep Notes</h4>
                    </a>
                </div>
            </nav>  <br />
        </>
    );
}

export default Header;