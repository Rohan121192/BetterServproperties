import SectionWrapper from '../shared/SectionWrapper';
import ScrollReveal from '../shared/ScrollReveal';

export default function MissionVision() {
  return (
    <SectionWrapper bg="var(--bg-alt)">
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <ScrollReveal>
          <h2 className="section-title">Mission &amp; Vision</h2>
        </ScrollReveal>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '28px' }}>
        <ScrollReveal delay={2} className="fc" style={{ borderLeft: '4px solid var(--blue)', paddingLeft: '28px' }}>
          <h3 style={{ color: 'var(--blue)', marginBottom: '12px' }}>Our Mission</h3>
          <p>
            To provide exceptional real estate services that empower our clients to make informed property decisions with transparency, integrity, and unmatched expertise across Dubai and India.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={3} className="fc" style={{ borderLeft: '4px solid var(--gold)', paddingLeft: '28px' }}>
          <h3 style={{ color: 'var(--gold)', marginBottom: '12px' }}>Our Vision</h3>
          <p>
            To become the most trusted cross-border real estate consultancy, recognized for excellence, innovation, and unwavering commitment to client satisfaction across global markets.
          </p>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
