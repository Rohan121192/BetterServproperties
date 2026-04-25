import { NavLink, Link } from 'react-router-dom';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';

export default function Header() {
  const scrolled = useHeaderScroll(60);

  return (
    <header className={`cap-hdr${scrolled ? ' scrolled' : ''}`} id="mainHeader">
      <Link to="/" className="logo">
        <img src="/logo.png" alt="Better Serv Logo" />
      </Link>
      <nav className="dnav">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
        <NavLink to="/dubai" className={({ isActive }) => isActive ? 'active' : ''}>Dubai</NavLink>
        <NavLink to="/india" className={({ isActive }) => isActive ? 'active' : ''}>India</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Other Services</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
      </nav>
      <Link to="/contact" className="cta-btn">Get in Touch</Link>
    </header>
  );
}
