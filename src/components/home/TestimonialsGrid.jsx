import SectionWrapper from '../shared/SectionWrapper';
import ScrollReveal from '../shared/ScrollReveal';
import { TM } from '../../data/testimonials';

export default function TestimonialsGrid({ bg = 'var(--bg)', showSubtitle = true }) {
  return (
    <SectionWrapper bg={bg}>
      <div style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <h2 className="section-title">What Our Clients Say</h2>
        </ScrollReveal>
        {showSubtitle && (
          <ScrollReveal delay={2}>
            <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
              Trusted by investors, homeowners, and NRIs worldwide
            </p>
          </ScrollReveal>
        )}
        {!showSubtitle && <div style={{ marginTop: '40px' }}></div>}
        
        <div className="test-grid">
          {TM.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index + 2} className="tc">
              <div className="stars">★★★★★</div>
              <p className="qt">"{testimonial.tx}"</p>
              <div className="au">{testimonial.n}</div>
              <div className="rl">{testimonial.r}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
