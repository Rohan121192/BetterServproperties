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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data._subject = "New Lead: Get In Touch Section";

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
                  <div className="fr">
                    <label>First Name</label>
                    <input type="text" name="firstName" placeholder="John" required />
                  </div>
                  <div className="fr">
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="git-row2">
                  <div className="fr">
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="john@example.com" required />
                  </div>
                  <div className="fr">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="+971 50..." required />
                  </div>
                </div>

                <div className="fr">
                  <label>Message</label>
                  <textarea name="message" rows="4" placeholder="Tell us about your requirements..." required></textarea>
                </div>

                <button type="submit" className="btn btn-blue git-submit" disabled={loading}>
                  <LuSend size={16} /> {loading ? 'Sending...' : 'Send Message'}
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
