import SectionWrapper from '../shared/SectionWrapper';
import ScrollReveal from '../shared/ScrollReveal';

export default function StorySection() {
  return (
    <SectionWrapper bg="var(--bg)">
      <div className="about-split">
        <ScrollReveal className="fl">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=500&fit=crop" 
            alt="Our Story" 
            className="about-img" 
          />
        </ScrollReveal>
        <ScrollReveal className="fr" delay={2}>
          <h2 className="section-title">Built on Trust, Driven by Excellence</h2>
          <p className="section-subtitle" style={{ marginBottom: '16px' }}>
            Founded in 2014, Better Serv Properties began with a simple vision — to bridge the gap between premium property markets in Dubai and India. What started as a small team has grown into a trusted name across two continents.
          </p>
          <p className="section-subtitle" style={{ marginBottom: '16px' }}>
            Our founder, Vishnu S., recognized that international property buyers needed more than just listings — they needed a partner who understood both markets intimately. Today, Better Serv Properties serves over 1,200 satisfied clients worldwide.
          </p>
          <p className="section-subtitle">
            We specialize in luxury residential properties, commercial spaces, and investment opportunities. Every property is personally vetted to ensure it meets our stringent quality standards.
          </p>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
