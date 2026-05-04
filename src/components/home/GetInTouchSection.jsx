import { useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import ScrollReveal from '../shared/ScrollReveal';
import { LuPhone, LuMail, LuMessageCircle, LuSend } from 'react-icons/lu';

const CONTACTS = [
  {
    icon: LuPhone,
    label: 'Call Us',
    line1: '+971 50 123 4567',
    line2: '+91 98765 43210',
    href: 'tel:+971501234567',
  },
  {
    icon: LuMessageCircle,
    label: 'WhatsApp',
    line1: 'Chat with an expert',
    line2: 'Response within minutes',
    href: 'https://wa.me/971501234567',
    wa: true,
  },
  {
    icon: LuMail,
    label: 'Email Us',
    line1: 'vishnuss80@gmail.com',
    line2: 'We reply within 24 hours',
    href: 'mailto:vishnuss80@gmail.com',
  },
];

export default function GetInTouchSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="git-section">
      {/* Top dark strip with CTA */}
      <div className="git-top">
        <ScrollReveal>
          <h2 className="section-title git-heading">Get in Touch With Us</h2>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="git-sub">
            Whether you're buying, selling, or investing — our experts are ready to help you make the right move.
          </p>
        </ScrollReveal>

        {/* Contact chips */}
        <div className="git-chips">
          {CONTACTS.map(({ icon: Icon, label, line1, line2, href, wa }, i) => (
            <ScrollReveal key={i} delay={i + 2} className="git-chip">
              <a href={href} target={wa ? '_blank' : undefined} rel="noreferrer" className={`git-chip-inner${wa ? ' git-wa' : ''}`}>
                <div className="git-chip-icon"><Icon size={22} /></div>
                <div>
                  <strong>{label}</strong>
                  <span>{line1}</span>
                  <span className="git-chip-sub">{line2}</span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Form card */}
      <div className="git-form-wrap">
        <ScrollReveal delay={2} className="git-form-card">
          {!submitted ? (
            <>
              <h3 className="git-form-title">Send Us a Message</h3>
              <p className="git-form-sub">Fill in the form and we'll get back to you within 24 hours.</p>
              <form className="git-form" onSubmit={handleSubmit} noValidate>
                <div className="git-row2">
                  <div className="fr"><label>First Name</label><input type="text" placeholder="John" required /></div>
                  <div className="fr"><label>Last Name</label><input type="text" placeholder="Doe" /></div>
                </div>
                <div className="git-row2">
                  <div className="fr"><label>Email</label><input type="email" placeholder="you@email.com" required /></div>
                  <div className="fr"><label>Phone</label><input type="tel" placeholder="+971 or +91" /></div>
                </div>
                <div className="fr">
                  <label>Interested In</label>
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
                <div className="fr">
                  <label>Message</label>
                  <textarea rows="4" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="submit" className="btn btn-blue git-submit">
                  <LuSend size={16} /> Send Message
                </button>
              </form>
            </>
          ) : (
            <div className="form-ok">
              <div className="ck">✓</div>
              <h3>Message Sent!</h3>
              <p>We'll reach out within 24 hours. Thank you for choosing Better Serv Properties.</p>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
