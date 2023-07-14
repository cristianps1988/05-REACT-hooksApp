import { Link, NavLink } from "react-router-dom"


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand bg-body-tertiary rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/about"
                            className={({ isActive }) => {
                                return `nav-link ${isActive ? 'active' : ''}`
                            }}
                        >
                            About
                        </NavLink>
                        <NavLink to="/login"
                            className={({ isActive }) => {
                                return `nav-link ${isActive ? 'active' : ''}`
                            }}
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
