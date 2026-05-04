import { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

/* ── Layout / Shared ── */
import SectionWrapper from '../components/shared/SectionWrapper';
import ScrollReveal from '../components/shared/ScrollReveal';
import PropertySlider from '../components/shared/PropertySlider';
import DeveloperSlider from '../components/shared/DeveloperSlider';

/* ── Home sections ── */
import HeroSection from '../components/home/HeroSection';
import LatestLaunchesSlider from '../components/home/LatestLaunchesSlider';
import ProcessTimeline from '../components/home/ProcessTimeline';
import WhyUsGrid from '../components/home/WhyUsGrid';
import StatsBar from '../components/home/StatsBar';
import CeoAboutSection from '../components/home/CeoAboutSection';
import TestimonialsGrid from '../components/home/TestimonialsGrid';
import CtaSection from '../components/shared/CtaSection';

/* ── Data ── */
import { DP, IP } from '../data/properties';
import { DD, ID } from '../data/developers';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomePage() {
  const { openModal } = useOutletContext();
  useScrollReveal();

  return (
    <main className="page">

      {/* ── 1. HERO ── */}
      <HeroSection />

      {/* ── 2. LATEST LAUNCHES ── */}
      <LatestLaunchesSlider onEnquire={openModal} />

      {/* ── 3. DUBAI PROJECTS ── */}
      <SectionWrapper bg="var(--bg)">
        <div className="section-hdr-row">
          <ScrollReveal>
            <span className="section-region-tag dubai-tag">Dubai</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Dubai Properties</h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <Link to="/dubai" className="btn btn-outline-dark">
              View All <span className="btn-icon">→</span>
            </Link>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={3}>
          <PropertySlider properties={DP.filter(p => p.m === 'buy')} id="hs-dp" onEnquire={openModal} />
        </ScrollReveal>
      </SectionWrapper>

      {/* ── 4. INDIA PROJECTS ── */}
      <SectionWrapper bg="var(--bg-alt)">
        <div className="section-hdr-row">
          <ScrollReveal>
            <span className="section-region-tag india-tag">India</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Indian Properties</h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <Link to="/india" className="btn btn-outline-dark">
              View All <span className="btn-icon">→</span>
            </Link>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={3}>
          <PropertySlider properties={IP.filter(p => p.m === 'buy')} id="hs-ip" onEnquire={openModal} />
        </ScrollReveal>
      </SectionWrapper>

      {/* ── 5. OUR PROCESS ── */}
      <ProcessTimeline />

      {/* ── 6. DUBAI DEVELOPERS ── */}
      <SectionWrapper bg="var(--bg-alt)">
        <div style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span className="section-region-tag dubai-tag" style={{ display: 'inline-flex', marginBottom: '10px' }}>Dubai</span>
            <h2 className="section-title">Trusted Dubai Developers</h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
              We are a preferred partner for the UAE's leading property developers.
            </p>
          </ScrollReveal>
          <DeveloperSlider developers={DD} id="hs-dd" onEnquire={openModal} />
        </div>
      </SectionWrapper>

      {/* ── 7. INDIA DEVELOPERS ── */}
      <SectionWrapper bg="var(--bg)">
        <div style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span className="section-region-tag india-tag" style={{ display: 'inline-flex', marginBottom: '10px' }}>India</span>
            <h2 className="section-title">Trusted Indian Developers</h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
              Partnered with India's most reputed and awarded real estate groups.
            </p>
          </ScrollReveal>
          <DeveloperSlider developers={ID} id="hs-id" onEnquire={openModal} />
        </div>
      </SectionWrapper>

      {/* ── 8. WHY US ── */}
      <WhyUsGrid />

      {/* ── 9. STATS ── */}
      <StatsBar />

      {/* ── 10. CEO / ABOUT ── */}
      <CeoAboutSection />

      {/* ── 11. TESTIMONIALS ── */}
      <TestimonialsGrid />

      {/* ── 11. CTA SECTION ── */}
      <CtaSection
        tag="Get Started"
        title="Ready to Find Your Dream Home?"
        subtitle="Let our experts guide you to the perfect property."
      />

    </main>
  );
}
