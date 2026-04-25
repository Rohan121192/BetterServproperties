import { Link } from 'react-router-dom';
import SectionWrapper from '../shared/SectionWrapper';
import ScrollReveal from '../shared/ScrollReveal';

export default function AboutSnippet() {
  return (
    <SectionWrapper bg="var(--bg)">
      <div className="about-split">
        <ScrollReveal className="fl">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=500&fit=crop" 
            alt="About"
            className="about-img" 
          />
        </ScrollReveal>
        <ScrollReveal className="fr" delay={2}>
          <h2 className="section-title">Redefining Real Estate Excellence</h2>
          <p className="section-subtitle" style={{ marginBottom: '24px' }}>
            With over a decade of expertise in both the Indian and Dubai property markets, we connect 
            discerning buyers with exceptional properties. Our team ensures every transaction is seamless, 
            transparent, and rewarding.
          </p>
          <Link to="/about" className="btn btn-dark">Learn More <span className="btn-icon">→</span></Link>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
