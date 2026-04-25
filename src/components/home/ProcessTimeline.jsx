import { useEffect, useRef } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import ScrollReveal from '../shared/ScrollReveal';
import { PR } from '../../data/process';

export default function ProcessTimeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const tl = timelineRef.current;
    if (!tl) return;
    
    let done = false;
    
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done) {
        done = true;
        const lines = tl.querySelectorAll('.ts-line');
        lines.forEach((l, i) => {
          setTimeout(() => l.classList.add('vis'), 300 + i * 200);
        });
        obs.unobserve(tl);
      }
    }, { threshold: 0.3 });
    
    obs.observe(tl);
    return () => obs.disconnect();
  }, []);

  return (
    <SectionWrapper bg="var(--bg-alt)">
      <div style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <h2 className="section-title" style={{ marginBottom: '56px' }}>Our Process</h2>
        </ScrollReveal>
        
        <div className="timeline" ref={timelineRef}>
          {PR.map((step, index) => (
            <ScrollReveal key={index} delay={index + 3} className="ts">
              <div className="ts-num">{step.n}</div>
              {index < PR.length - 1 && <div className="ts-line"></div>}
              <h4>{step.t}</h4>
              <p>{step.d}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
