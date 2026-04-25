import SectionWrapper from '../shared/SectionWrapper';
import ScrollReveal from '../shared/ScrollReveal';
import { WU } from '../../data/whyUs';
import {
  LuUsers,
  LuShieldCheck,
  LuGlobe,
  LuDollarSign,
  LuHeadphones,
  LuZap,
} from 'react-icons/lu';

const iconMap = {
  users: LuUsers,
  shield: LuShieldCheck,
  globe: LuGlobe,
  dollar: LuDollarSign,
  headphones: LuHeadphones,
  zap: LuZap,
};

export default function WhyUsGrid() {
  return (
    <SectionWrapper bg="var(--bg-dark)">
      <div style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Why Choose Better Serv Properties
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.45)', margin: '0 auto 56px' }}>
            The trusted name in premium real estate across two continents
          </p>
        </ScrollReveal>

        <div className="wu-grid">
          {WU.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <ScrollReveal key={index} delay={index + 2} className="wu-card">
                <div className="wu-icon-wrap">
                  <div className="wu-icon-ring">
                    <Icon size={32} strokeWidth={1.6} />
                  </div>
                </div>
                <h4 className="wu-title">{item.t}</h4>
                <p className="wu-desc">{item.d}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
