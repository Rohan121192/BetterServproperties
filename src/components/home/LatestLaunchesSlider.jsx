import { useRef, useState } from 'react';
import { LuMapPin, LuChevronLeft, LuChevronRight, LuTag, LuBuilding2 } from 'react-icons/lu';
import { LAUNCHES } from '../../data/launches';
import SectionWrapper from '../shared/SectionWrapper';
import ScrollReveal from '../shared/ScrollReveal';

function LaunchCard({ project, onEnquire }) {
  return (
    <div className="lc-card">
      <div className="lc-img-wrap">
        <img src={project.img} alt={project.name} loading="lazy" />
        <span className="lc-badge">{project.badge}</span>
        <span className={`lc-region-tag ${project.region}`}>
          {project.region === 'dubai' ? '🇦🇪 Dubai' : '🇮🇳 India'}
        </span>
      </div>
      <div className="lc-body">
        <h3 className="lc-name">{project.name}</h3>
        <div className="lc-loc">
          <LuMapPin size={13} />
          {project.location}
        </div>
        <div className="lc-meta">
          <span className="lc-meta-item">
            <LuBuilding2 size={13} /> {project.type}
          </span>
          <span className="lc-meta-item">
            <LuTag size={13} /> From {project.price}
          </span>
        </div>
        <p className="lc-highlight">{project.highlight}</p>
        <div className="lc-actions">
          <button
            className="btn btn-blue lc-btn"
            onClick={() => onEnquire && onEnquire(project.name, `${project.location} — From ${project.price}`)}
          >
            Enquire Now <span className="btn-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LatestLaunchesSlider({ onEnquire }) {
  const trackRef = useRef(null);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? LAUNCHES : LAUNCHES.filter(p => p.region === filter);

  const scroll = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 380, behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper bg="var(--bg-alt)">
      {/* Header */}
      <div className="lc-header">
        <div className="lc-header-text">
          <ScrollReveal>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>
              Latest Launches
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="section-subtitle">
              Handpicked new project launches across Dubai &amp; India — invest early, gain more.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter tabs */}
        <ScrollReveal delay={2} className="lc-filters">
          {['all', 'dubai', 'india'].map(f => (
            <button
              key={f}
              className={`lc-filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All Projects' : f === 'dubai' ? '🇦🇪 Dubai' : '🇮🇳 India'}
            </button>
          ))}
        </ScrollReveal>
      </div>

      {/* Slider */}
      <div className="lc-slider-wrap">
        <button className="sb l lc-arrow" onClick={() => scroll(-1)} aria-label="Previous">
          <LuChevronLeft size={22} />
        </button>

        <div className="lc-track" ref={trackRef}>
          {filtered.map((project) => (
            <LaunchCard key={project.id} project={project} onEnquire={onEnquire} />
          ))}
        </div>

        <button className="sb r lc-arrow" onClick={() => scroll(1)} aria-label="Next">
          <LuChevronRight size={22} />
        </button>
      </div>
    </SectionWrapper>
  );
}
