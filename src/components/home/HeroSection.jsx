import { Link } from 'react-router-dom';
import ScrollReveal from '../shared/ScrollReveal';
import SectionTag from '../shared/SectionTag';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-yt-wrap">
        <iframe 
          src="https://www.youtube.com/embed/nqw0fuCSpMo?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=nqw0fuCSpMo&modestbranding=1&iv_load_policy=3&disablekb=1&enablejsapi=1" 
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen
          title="Dubai Real Estate"
        ></iframe>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <ScrollReveal delay={1}>
          <SectionTag>Luxury Real Estate</SectionTag>
        </ScrollReveal>
        
        <ScrollReveal delay={2}>
          <h1>Find Your Perfect<br/><span>Dream Home</span></h1>
        </ScrollReveal>
        
        <ScrollReveal delay={3}>
          <p>
            Premium properties across Dubai and India. From waterfront penthouses to heritage villas,
            experience real estate redefined.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={5}>
          <div className="hero-btns">
            <Link to="/dubai" className="btn btn-blue">Dubai Properties <span className="btn-icon">→</span></Link>
            <Link to="/india" className="btn btn-outline">India Properties <span className="btn-icon">→</span></Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
