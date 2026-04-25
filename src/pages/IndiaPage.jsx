import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper from '../components/shared/SectionWrapper';
import ScrollReveal from '../components/shared/ScrollReveal';
import PropertyCard from '../components/shared/PropertyCard';
import DeveloperSlider from '../components/shared/DeveloperSlider';
import CtaSection from '../components/shared/CtaSection';

import { IP } from '../data/properties';
import { ID } from '../data/developers';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function IndiaPage() {
  const { openModal } = useOutletContext();
  const [mode, setMode] = useState('buy');
  
  useScrollReveal([mode]);

  const displayedProps = IP.filter(p => p.m === mode);

  return (
    <main className="page">
      <PageBanner 
        tag="India Portfolio" 
        title="Properties in India" 
        subtitle="Premium residences across India's top metropolitan cities" 
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
            <h2 className="section-title">Top Developers in India</h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
              We have extensive options and pre-launch access with these world-class developers.
            </p>
          </ScrollReveal>
          
          <div className="dev-block">
            <span className="dev-slider-label">🇮🇳 India Developers</span>
            <DeveloperSlider developers={ID} id="hs8" onEnquire={openModal} />
          </div>
          
          <ScrollReveal delay={3} style={{ marginTop: '32px' }}>
            <p style={{ color: 'var(--blue)', fontWeight: 600 }}>
              ✨ Better Serv Properties is a preferred partner for these developers, offering you exclusive price benefits.
            </p>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      <CtaSection 
        title="Ready to Invest in India?"
        subtitle="Our India specialists are ready to guide you to the perfect property."
        btnText="Get in Touch"
      />
    </main>
  );
}
