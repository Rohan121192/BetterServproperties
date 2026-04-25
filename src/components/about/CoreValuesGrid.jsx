import SectionWrapper from '../shared/SectionWrapper';
import ScrollReveal from '../shared/ScrollReveal';
import { VL } from '../../data/coreValues';
import { LuTarget, LuShieldCheck, LuScale, LuAward, LuZap, LuLeaf } from 'react-icons/lu';

const iconMap = {
  target: <LuTarget size={26} />,
  shield: <LuShieldCheck size={26} />,
  scale: <LuScale size={26} />,
  award: <LuAward size={26} />,
  zap: <LuZap size={26} />,
  leaf: <LuLeaf size={26} />
};

export default function CoreValuesGrid() {
  return (
    <SectionWrapper bg="var(--bg)">
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <ScrollReveal>
          <h2 className="section-title">Core Values</h2>
        </ScrollReveal>
      </div>
      
      <div className="val-grid">
        {VL.map((value, index) => (
          <ScrollReveal key={index} delay={index + 2} className="vc">
            <div className="vi">
              {iconMap[value.icon]}
            </div>
            <div>
              <h4>{value.t}</h4>
              <p>{value.d}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
