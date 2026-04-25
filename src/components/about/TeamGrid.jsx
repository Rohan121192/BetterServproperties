import SectionWrapper from '../shared/SectionWrapper';
import ScrollReveal from '../shared/ScrollReveal';
import SectionTag from '../shared/SectionTag';
import { TEM } from '../../data/team';

export default function TeamGrid() {
  return (
    <SectionWrapper bg="var(--bg)">
      <div style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <SectionTag center>The People</SectionTag>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="section-title">Our Leadership Team</h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
            Experienced professionals dedicated to delivering excellence
          </p>
        </ScrollReveal>
        
        <div className="team-grid">
          {TEM.map((member, index) => (
            <ScrollReveal key={index} delay={index + 2} className="team-c">
              <img src={member.img} alt={member.n} className="av" loading="lazy" />
              <h4>{member.n}</h4>
              <p>{member.r}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
