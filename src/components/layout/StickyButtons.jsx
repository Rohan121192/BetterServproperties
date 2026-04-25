import { FaWhatsapp } from 'react-icons/fa6';
import { LuPhone } from 'react-icons/lu';

export default function StickyButtons() {
  return (
    <div className="sticky-btns">
      <a
        id="sticky-whatsapp"
        className="sticky-btn wa"
        href="https://wa.me/971568652355"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
        <span className="btn-tip">WhatsApp Us</span>
      </a>
      <a
        id="sticky-call"
        className="sticky-btn call"
        href="tel:+971568652355"
        aria-label="Call Us"
      >
        <LuPhone />
        <span className="btn-tip">Call Us</span>
      </a>
    </div>
  );
}
