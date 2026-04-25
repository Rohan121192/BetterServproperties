import { useState } from 'react';

export default function EnquiryModal({ isOpen, title, subtitle, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <div className="modal">
        <div className="modal-hd">
          <h3>{submitted ? 'Enquiry' : `Enquire: ${title}`}</h3>
          <button className="modal-x" onClick={handleClose}>✕</button>
        </div>
        {!submitted ? (
          <>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.88rem', marginBottom: '20px' }}>{subtitle}</p>
            <form onSubmit={handleSubmit}>
              <div className="fr"><label>Name</label><input type="text" placeholder="Full name" /></div>
              <div className="fr"><label>Email</label><input type="email" placeholder="you@email.com" /></div>
              <div className="fr"><label>Phone</label><input type="tel" placeholder="+971 or +91" /></div>
              <div className="fr"><label>Message</label><textarea rows="3" placeholder="I'm interested..."></textarea></div>
              <button className="btn btn-blue" type="submit" style={{ width: '100%' }}>Submit Enquiry <span className="btn-icon">→</span></button>
            </form>
          </>
        ) : (
          <div className="form-ok">
            <div className="ck">✓</div>
            <h3>Thank You!</h3>
            <p>Our team will contact you within 24 hours.</p>
          </div>
        )}
      </div>
    </div>
  );
}
