import { useOutletContext } from 'react-router-dom';
import PageBanner from '../components/shared/PageBanner';
import StorySection from '../components/about/StorySection';
import MissionVision from '../components/about/MissionVision';
import CoreValuesGrid from '../components/about/CoreValuesGrid';
import StatsBar from '../components/home/StatsBar';
import TeamGrid from '../components/about/TeamGrid';
import ServicesGrid from '../components/home/ServicesGrid';
import TestimonialsGrid from '../components/home/TestimonialsGrid';
import SectionWrapper from '../components/shared/SectionWrapper';
import ScrollReveal from '../components/shared/ScrollReveal';
import DeveloperSlider from '../components/shared/DeveloperSlider';
import CtaSection from '../components/shared/CtaSection';

import { DD, ID } from '../data/developers';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutPage() {
  const { openModal } = useOutletContext();
  useScrollReveal();

  return (
    <main className="page">
      <PageBanner
        tag="Who We Are"
        title="About Better Serv Properties"
        subtitle="A decade of excellence in premium real estate"
      />

      <StorySection />
      <MissionVision />
      <CoreValuesGrid />
      <StatsBar />
      <TeamGrid />

      {/* Services component uses bg-alt, we need to override if we want consistency, but original has bg-alt here too */}
      <ServicesGrid />

      <TestimonialsGrid bg="var(--bg)" showSubtitle={false} />

      {/* Partner Developers */}
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
            <DeveloperSlider developers={DD} id="hs5" onEnquire={openModal} />
          </div>
          <div className="dev-block">
            <span className="dev-slider-label">India Developers</span>
            <DeveloperSlider developers={ID} id="hs6" onEnquire={openModal} />
          </div>
        </div>
      </SectionWrapper>

      <CtaSection
        title="Want to Work With Us?"
        subtitle="Let's discuss how we can help you achieve your property goals."
      />
    </main>
  );
}
