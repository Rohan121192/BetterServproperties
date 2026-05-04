import { useState, useEffect } from 'react';

const SESSION_KEY = 'bsp_welcome_seen';

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);   // controls render
  const [open,    setOpen]    = useState(false);   // controls CSS entrance
  const [submitted, setSubmitted] = useState(false);
  const [closing,   setClosing]   = useState(false);

  useEffect(() => {
    // Only show once per browser session
    if (sessionStorage.getItem(SESSION_KEY)) return;

    // Wait 2s (preloader is gone by ~800ms, so we appear 1.2s after)
    const showTimer = setTimeout(() => {
      setVisible(true);
      // Tiny delay so CSS transition fires
      requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
    }, 2000);

    return () => clearTimeout(showTimer);
  }, []);

  // Auto-dismiss 5s after submission
  useEffect(() => {
    if (!submitted) return;
    const t = setTimeout(() => dismiss(), 5000);
    return () => clearTimeout(t);
  }, [submitted]);

  const dismiss = () => {
    setClosing(true);
    sessionStorage.setItem(SESSION_KEY, '1');
    setTimeout(() => {
      setOpen(false);
      setVisible(false);
      setClosing(false);
    }, 420);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!visible) return null;

  return (
    <div
      className={`wp-overlay${open ? ' wp-open' : ''}${closing ? ' wp-closing' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome — get in touch"
    >
      <div className="wp-card">
        {/* Close button */}
        <button className="wp-close" onClick={dismiss} aria-label="Close popup">✕</button>

        {!submitted ? (
          <>
            {/* Header strip */}
            <div className="wp-head">
              <div className="wp-badge">🏙️ Welcome</div>
              <h2 className="wp-title">Find Your Dream Property</h2>
              <p className="wp-sub">
                Let our experts guide you — Dubai &amp; India's finest real estate, hand-picked for you.
              </p>
            </div>

            {/* Form body */}
            <form className="wp-form" onSubmit={handleSubmit} noValidate>
              <div className="wp-row2">
                <div className="fr">
                  <label>First Name</label>
                  <input type="text" placeholder="John" required />
                </div>
                <div className="fr">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" />
                </div>
              </div>

              <div className="wp-row2">
                <div className="fr">
                  <label>Email</label>
                  <input type="email" placeholder="you@email.com" required />
                </div>
                <div className="fr">
                  <label>Phone</label>
                  <input type="tel" placeholder="+971 or +91" />
                </div>
              </div>

              <div className="fr">
                <label>I'm Interested In</label>
                <select>
                  <option>Select a service</option>
                  <option>Buying in Dubai</option>
                  <option>Buying in India</option>
                  <option>Selling Property</option>
                  <option>Investment Advisory</option>
                  <option>Property Management</option>
                  <option>Other</option>
                </select>
              </div>

              <button type="submit" className="btn btn-blue wp-submit">
                Get Free Consultation <span className="btn-icon">→</span>
              </button>

              <p className="wp-privacy">🔒 We respect your privacy. No spam, ever.</p>
            </form>
          </>
        ) : (
          /* Success state */
          <div className="wp-success">
            <div className="wp-tick">✓</div>
            <h3>You're All Set!</h3>
            <p>Our team will reach out within 24 hours.<br />This window closes automatically.</p>
            <div className="wp-countdown-bar">
              <div className="wp-countdown-fill" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
