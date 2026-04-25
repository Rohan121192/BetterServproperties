import { Link } from 'react-router-dom';
import { LuMapPin, LuPhone, LuMail } from 'react-icons/lu';
import { FaInstagram, FaTiktok, FaLinkedinIn, FaXTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div>
          <div className="fl"><img src="/logo.png" alt="Better Serv Properties" /></div>
          <p>Premium real estate services connecting discerning buyers with exceptional properties across Dubai and India.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/dubai">Dubai Properties</Link>
          <Link to="/india">India Properties</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Services</h4>
          <Link to="/services">Interior Design</Link>
          <Link to="/services">Property Maintenance</Link>
          <Link to="/services">Rental Management</Link>
          <Link to="/services">Legal Support</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="#"><LuMapPin style={{ marginRight: 6, verticalAlign: 'middle' }} /> Business Bay, Dubai</a>
          <a href="#"><LuPhone style={{ marginRight: 6, verticalAlign: 'middle' }} /> +971 50 123 4567</a>
          <a href="mailto:vishnuss80@gmail.com"><LuMail style={{ marginRight: 6, verticalAlign: 'middle' }} /> vishnuss80@gmail.com</a>
          <div className="social-links">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="footer-btm">© 2026 Better Serv Properties. All rights reserved.</div>
    </div>
  );
}
