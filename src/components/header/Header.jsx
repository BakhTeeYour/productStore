import 'bootstrap/dist/css/bootstrap.css'
import Search from "../search/Search";
import Filter from "../filter/Filter";

const logoUrl = 'https://alif-skills.pro/media/logo_alif.svg'

function Header() {
    return (
        <>
            <nav className="navbar bg-light mb-5 mt-2">
                <div className="container-fluid d-flex justify-content-around">
                    <img src={logoUrl} className="navbar-brand" alt=""/>
                    <Filter/>
                    <Search/>
                </div>
            </nav>
        </>
    );
}

export default Header;