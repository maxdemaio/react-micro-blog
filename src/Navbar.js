import { Link } from 'react-router-dom';

// Stateless functional component
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Max's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;