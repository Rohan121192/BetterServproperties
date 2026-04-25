import { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import AboutSnippet from '../components/home/AboutSnippet';
import ServicesGrid from '../components/home/ServicesGrid';
import PropertySlider from '../components/shared/PropertySlider';
import WhyUsGrid from '../components/home/WhyUsGrid';
import StatsBar from '../components/home/StatsBar';
import DeveloperSlider from '../components/shared/DeveloperSlider';
import ProcessTimeline from '../components/home/ProcessTimeline';
import TestimonialsGrid from '../components/home/TestimonialsGrid';
import CtaSection from '../components/shared/CtaSection';
import SectionWrapper from '../components/shared/SectionWrapper';
import ScrollReveal from '../components/shared/ScrollReveal';
import { DP, IP } from '../data/properties';
import { DD, ID } from '../data/developers';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomePage() {
  const { openModal } = useOutletContext();
  useScrollReveal();

  return (
    <main className="page">
      <HeroSection />
      <AboutSnippet />
      <ServicesGrid />

      {/* Dubai Properties Slider */}
      <SectionWrapper bg="var(--bg)">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
          <ScrollReveal>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Dubai Properties</h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <Link to="/dubai" className="btn btn-outline-dark">View All <span className="btn-icon">→</span></Link>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={3}>
          <PropertySlider properties={DP.filter(p => p.m === 'buy')} id="hs1" onEnquire={openModal} />
        </ScrollReveal>
      </SectionWrapper>

      {/* India Properties Slider */}
      <SectionWrapper bg="var(--bg-alt)">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
          <ScrollReveal>
            <h2 className="section-title" style={{ marginBottom: 0 }}>India Properties</h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <Link to="/india" className="btn btn-outline-dark">View All <span className="btn-icon">→</span></Link>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={3}>
          <PropertySlider properties={IP.filter(p => p.m === 'buy')} id="hs2" onEnquire={openModal} />
        </ScrollReveal>
      </SectionWrapper>

      <WhyUsGrid />
      <StatsBar />

      {/* Developers */}
      <SectionWrapper bg="var(--bg-alt)">
        <div style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="section-title">Global Real Estate Developers</h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
              Better Serv Properties is a preferred partner for world-class developers across Dubai and India.
            </p>
          </ScrollReveal>

          <div className="dev-block">
            <span className="dev-slider-label">Dubai Developers</span>
            <DeveloperSlider developers={DD} id="hs3" onEnquire={openModal} />
          </div>
          <div className="dev-block">
            <span className="dev-slider-label">India Developers</span>
            <DeveloperSlider developers={ID} id="hs4" onEnquire={openModal} />
          </div>
        </div>
      </SectionWrapper>

      <ProcessTimeline />
      <TestimonialsGrid />

      <CtaSection
        tag="Get Started"
        title="Ready to Find Your Dream Home?"
        subtitle="Let our experts guide you to the perfect property."
      />
    </main>
  );
}
