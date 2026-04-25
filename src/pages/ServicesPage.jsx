import { Link } from 'react-router-dom';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper from '../components/shared/SectionWrapper';
import ScrollReveal from '../components/shared/ScrollReveal';
import CtaSection from '../components/shared/CtaSection';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ServicesPage() {
  useScrollReveal();

  return (
    <main className="page">
      <PageBanner 
        tag="Beyond Handover" 
        title="Premier Post-Purchase Services" 
        subtitle="Experience absolute peace of mind with our end-to-end property ecosystem." 
      />

      {/* Interior Design */}
      <SectionWrapper bg="var(--bg)">
        <div className="about-split">
          <ScrollReveal className="fl">
            <img src="/service-assets/interior.png" alt="Interior Design" className="about-img" loading="lazy" />
          </ScrollReveal>
          <ScrollReveal className="fr" delay={2}>
            <h2 className="section-title">Post-Handover Interior Designing</h2>
            <p className="section-subtitle" style={{ marginBottom: '24px' }}>
              Transform your newly acquired property into a sophisticated home that reflects your lifestyle. Our bespoke interior design services handle everything from conceptualization and luxury furniture sourcing to full fit-out and smart home integration. We bridge the gap between architectural raw space and ultimate luxury living.
            </p>
            <Link to="/contact" className="btn btn-dark">Get a Quote <span className="btn-icon">→</span></Link>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Property Maintenance */}
      <SectionWrapper bg="var(--bg-alt)">
        <div className="about-split">
          <ScrollReveal className="fl" delay={2}>
            <h2 className="section-title">Property Maintenance</h2>
            <p className="section-subtitle" style={{ marginBottom: '24px' }}>
              Preserve and enhance the value of your real estate asset with our proactive maintenance solutions. Our dedicated technical teams provide 24/7 support for HVAC, electrical, plumbing, and structural integrity. We don't just fix problems; we prevent them, ensuring your property remains in impeccable condition year-round.
            </p>
            <Link to="/contact" className="btn btn-dark">Get a Quote <span className="btn-icon">→</span></Link>
          </ScrollReveal>
          <ScrollReveal className="fr">
            <img src="/service-assets/maintenance.png" alt="Property Maintenance" className="about-img" loading="lazy" />
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Rental Management */}
      <SectionWrapper bg="var(--bg)">
        <div className="about-split">
          <ScrollReveal className="fl">
            <img src="/service-assets/management.png" alt="Property Management" className="about-img" loading="lazy" />
          </ScrollReveal>
          <ScrollReveal className="fr" delay={2}>
            <h2 className="section-title">Rental &amp; Property Management</h2>
            <p className="section-subtitle" style={{ marginBottom: '24px' }}>
              Maximize your ROI without the day-to-day hassles of being a landlord. Our rental management services handle tenant vetting, lease documentation, rent collection, and marketing. We act as your concierge, ensuring high occupancy rates and seamless logistics for international investors and local homeowners alike.
            </p>
            <Link to="/contact" className="btn btn-dark">Get a Quote <span className="btn-icon">→</span></Link>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Legal Support */}
      <SectionWrapper bg="var(--bg-alt)">
        <div className="about-split">
          <ScrollReveal className="fl" delay={2}>
            <h2 className="section-title">Legal &amp; Documentation Support</h2>
            <p className="section-subtitle" style={{ marginBottom: '24px' }}>
              Navigate the complexities of property law in Dubai and India with absolute confidence. From title deed transfers and Power of Attorney (POA) representation to NOC processing and visa assistance, our legal support team handles all the red tape. We ensure every transaction is compliant, secure, and completed with speed.
            </p>
            <Link to="/contact" className="btn btn-dark">Get a Quote <span className="btn-icon">→</span></Link>
          </ScrollReveal>
          <ScrollReveal className="fr">
            <img src="/service-assets/legal.png" alt="Legal Support" className="about-img" loading="lazy" />
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Valuation */}
      <SectionWrapper bg="var(--bg)">
        <div className="about-split">
          <ScrollReveal className="fl">
            <img src="/service-assets/valuation.png" alt="Valuation" className="about-img" loading="lazy" />
          </ScrollReveal>
          <ScrollReveal className="fr" delay={2}>
            <h2 className="section-title">Valuation &amp; Resale Services</h2>
            <p className="section-subtitle" style={{ marginBottom: '24px' }}>
              Make informed exit or reinvestment decisions backed by real-time market data. Our certified valuation experts provide accurate property appraisals, while our secondary market specialists formulate strategic resale plans to capture peak market value. We turn your property into a high-performance liquid asset.
            </p>
            <Link to="/contact" className="btn btn-dark">Get a Quote <span className="btn-icon">→</span></Link>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      <CtaSection 
        title="Ready to Get Started?"
        subtitle="Contact our team today and let's discuss your property needs."
      />
    </main>
  );
}
