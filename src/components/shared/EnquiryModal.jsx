import { useState } from 'react';

export default function EnquiryModal({ isOpen, title, subtitle, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Security: FormSubmit honeypot check
    if (data._honey) {
      setLoading(false);
      return; // Silent reject for bots
    }

    // Add context about what they are enquiring about
    data._subject = `New Enquiry: ${title}`;
    data._captcha = "false"; // Disable FormSubmit's redirect captcha for seamless AJAX

    try {
      await fetch("https://formsubmit.co/ajax/vishnuss860@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              <div className="fr"><label>Name</label><input type="text" name="name" placeholder="Full name" required /></div>
              <div className="fr"><label>Email</label><input type="email" name="email" placeholder="you@email.com" required /></div>
              <div className="fr"><label>Phone</label><input type="tel" name="phone" placeholder="+971 or +91" required /></div>
              <div className="fr"><label>Message</label><textarea name="message" rows="3" placeholder="I'm interested..."></textarea></div>
              <button className="btn btn-blue" type="submit" style={{ width: '100%' }} disabled={loading}>
                {loading ? 'Sending...' : 'Submit Enquiry'} <span className="btn-icon">→</span>
              </button>
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
