import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', closeMenuOnResize);
    return () => window.removeEventListener('resize', closeMenuOnResize);
  }, []);

  const linkClass = ({ isActive }) => `links${isActive ? ' current' : ''}`;

  return (
    <nav className="nav-bar">
      <div className="logo">Lahiru Devinda</div>
      <div className="menu-section">
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
          <NavLink className={linkClass} to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink className={linkClass} to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink className={linkClass} to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
          <NavLink className={linkClass} to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>
        <button className="theme-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
          <img className="theme-image" src={theme === 'dark' ? '/images/icons/sun.svg' : '/images/icons/moon.svg'} alt="Theme toggle" />
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <img className="menu-icon" src="/images/icons/icons8-menu-button.svg" alt="Menu" />
        </button>
      </div>
    </nav>
  );
}
