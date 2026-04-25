import SectionWrapper from '../shared/SectionWrapper';
import ScrollReveal from '../shared/ScrollReveal';
import { SV } from '../../data/services';
import { LuDiamond, LuKeyRound, LuTrendingUp, LuSettings } from 'react-icons/lu';

const iconMap = {
  diamond: <LuDiamond size={28} />,
  key: <LuKeyRound size={28} />,
  chart: <LuTrendingUp size={28} />,
  gear: <LuSettings size={28} />
};

export default function ServicesGrid() {
  return (
    <SectionWrapper bg="var(--bg-alt)">
      <div style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <h2 className="section-title">Our Services</h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
            Comprehensive real estate solutions tailored to your unique needs
          </p>
        </ScrollReveal>
        
        <div className="feat-grid">
          {SV.map((service, index) => (
            <ScrollReveal key={index} delay={index + 2} className="fc">
              <div className="ib">
                {iconMap[service.icon]}
              </div>
              <h3>{service.t}</h3>
              <p>{service.d}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
