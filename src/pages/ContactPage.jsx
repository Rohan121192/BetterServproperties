import { useState } from 'react';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper from '../components/shared/SectionWrapper';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionTag from '../components/shared/SectionTag';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { LuMapPin, LuPhone, LuMail, LuClock, LuMap } from 'react-icons/lu';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="page">
      <PageBanner 
        tag="Reach Out" 
        title="Contact Us" 
        subtitle="We'd love to hear from you" 
      />

      <SectionWrapper bg="var(--bg)">
        <div className="contact-grid">
          <ScrollReveal className="fl">
            <SectionTag>Get In Touch</SectionTag>
            <h2 className="section-title">Let's Start a Conversation</h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              Whether you're looking to buy, sell, invest, or simply explore — our team is ready to help.
            </p>
            
            <ScrollReveal delay={2} className="cic">
              <div className="ci"><LuMapPin /></div>
              <div>
                <h4>Dubai Office</h4>
                <p>Office 1204, Business Bay Tower, Dubai, UAE</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={3} className="cic">
              <div className="ci"><LuMapPin /></div>
              <div>
                <h4>India Office</h4>
                <p>4th Floor, Technopark Phase III, Trivandrum, Kerala</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={4} className="cic">
              <div className="ci"><LuPhone /></div>
              <div>
                <h4>Phone</h4>
                <p>+971 50 123 4567 (Dubai)<br />+91 98765 43210 (India)</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={5} className="cic">
              <div className="ci"><LuMail /></div>
              <div>
                <h4>Email</h4>
                <p>vishnuss80@gmail.com</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={6} className="cic">
              <div className="ci"><LuClock /></div>
              <div>
                <h4>Working Hours</h4>
                <p>Sun–Thu: 9 AM – 6 PM &nbsp;|&nbsp; Fri–Sat: By appointment</p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          <ScrollReveal className="fr" delay={2}>
            <div className="fb">
              {!submitted ? (
                <>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '20px' }}>
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="f2">
                      <div className="fr"><label>First Name</label><input type="text" placeholder="John" /></div>
                      <div className="fr"><label>Last Name</label><input type="text" placeholder="Doe" /></div>
                    </div>
                    <div className="f2">
                      <div className="fr"><label>Email</label><input type="email" placeholder="you@email.com" /></div>
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
                    <button type="submit" className="btn btn-blue" style={{ width: '100%' }}>
                      Send Message <span className="btn-icon">→</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="form-ok">
                  <div className="ck">✓</div>
                  <h3>Message Sent!</h3>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Map Placeholder */}
      <section style={{ background: 'var(--bg-alt)', padding: 0 }}>
        <div style={{ width: '100%', height: '360px', background: 'linear-gradient(135deg,#e8ecf1,#d3dbe6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', fontSize: '0.9rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}><LuMap size={48} /></div>
            <p>Interactive Map — Integrate Google Maps Here</p>
            <p style={{ fontSize: '0.78rem', marginTop: '4px' }}>Business Bay, Dubai, UAE</p>
          </div>
        </div>
      </section>
    </main>
  );
}
