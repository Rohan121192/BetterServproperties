import { NavLink } from 'react-router-dom';
import { LuHouse, LuBuilding2, LuLandmark, LuInfo, LuBriefcase, LuMail } from 'react-icons/lu';

export default function MobileNav() {
  return (
    <nav className="mob-bar">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
        <LuHouse />
        Home
      </NavLink>
      <NavLink to="/dubai" className={({ isActive }) => isActive ? 'active' : ''}>
        <LuBuilding2 />
        Dubai
      </NavLink>
      <NavLink to="/india" className={({ isActive }) => isActive ? 'active' : ''}>
        <LuLandmark />
        India
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
        <LuInfo />
        About
      </NavLink>
      <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
        <LuBriefcase />
        Services
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
        <LuMail />
        Contact
      </NavLink>
    </nav>
  );
}
