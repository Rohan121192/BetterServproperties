import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper from '../components/shared/SectionWrapper';
import ScrollReveal from '../components/shared/ScrollReveal';
import PropertyCard from '../components/shared/PropertyCard';
import DeveloperSlider from '../components/shared/DeveloperSlider';
import CtaSection from '../components/shared/CtaSection';

import { DP } from '../data/properties';
import { DD } from '../data/developers';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function DubaiPage() {
  const { openModal } = useOutletContext();
  const [mode, setMode] = useState('buy');
  
  // Re-run scroll reveal when mode changes (since new cards appear)
  useScrollReveal([mode]);

  const displayedProps = DP.filter(p => p.m === mode);

  return (
    <main className="page">
      <PageBanner 
        tag="Dubai Portfolio" 
        title="Properties in Dubai" 
        subtitle="Exclusive luxury properties across Dubai's most prestigious communities" 
      />

      <SectionWrapper bg="var(--bg)">
        <div style={{ textAlign: 'center' }}>
          <div className="tab-nav">
            <button 
              className={`tab-btn ${mode === 'buy' ? 'active' : ''}`} 
              onClick={() => setMode('buy')}
            >
              For Sale
            </button>
            <button 
              className={`tab-btn ${mode === 'rent' ? 'active' : ''}`} 
              onClick={() => setMode('rent')}
            >
              For Rent
            </button>
          </div>
          <div className="prop-grid">
            {displayedProps.map((prop, index) => (
              <ScrollReveal key={`${prop.id}-${mode}`} delay={(index % 4) + 1}>
                <PropertyCard property={prop} onEnquire={openModal} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="var(--bg-alt)">
        <div style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="section-title">Top Developers in Dubai</h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
              We have extensive options and pre-launch access with these world-class developers.
            </p>
          </ScrollReveal>
          
          <div className="dev-block">
            <span className="dev-slider-label">🏙️ Dubai Developers</span>
            <DeveloperSlider developers={DD} id="hs7" onEnquire={openModal} />
          </div>
          
          <ScrollReveal delay={3} style={{ marginTop: '32px' }}>
            <p style={{ color: 'var(--blue)', fontWeight: 600 }}>
              ✨ Better Serv Properties is a preferred partner for these developers, offering you exclusive price benefits.
            </p>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      <CtaSection 
        title="Ready to Invest in Dubai?"
        subtitle="Our Dubai specialists are ready to guide you to the perfect property."
        btnText="Get in Touch"
      />
    </main>
  );
}
