import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'current' : '';

  return (
    <nav className="nav-bar">
      <div className="logo">Lahiru Devinda</div>
      <div className="menu-section">
        <div className="menu">
          <Link to="/" className={`links ${isActive('/')}`}>Home</Link>
          <Link to="/projects" className={`links ${isActive('/projects')}`}>Projects</Link>
          <Link to="/contact" className={`links ${isActive('/contact')}`}>Contact</Link>
        </div>
        <button className="theme-button js-theme-toggle">
          <img className="theme-image" src="images/icons/moon.svg" alt="theme" />
        </button>
      </div>
    </nav>
  );
}