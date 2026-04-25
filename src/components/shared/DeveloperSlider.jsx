import { useRef, useEffect } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export default function DeveloperSlider({ developers, id, onEnquire }) {
  const trackRef = useRef(null);
  
  // Duplicate developers array for seamless looping visual
  const loopDevs = [...developers, ...developers];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let interval = null;
    let isHovered = false;

    const start = () => {
      if (interval) return;
      interval = setInterval(() => {
        if (isHovered) return;
        const card = track.firstElementChild;
        if (!card) return;
        
        const scrollAmount = card.offsetWidth + 20; // Width + gap
        const maxScroll = track.scrollWidth - track.clientWidth;
        
        if (track.scrollLeft >= maxScroll - 10) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }, 3500);
    };

    const stop = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const handleEnter = () => { isHovered = true; };
    const handleLeave = () => { isHovered = false; };

    track.addEventListener('mouseenter', handleEnter);
    track.addEventListener('mouseleave', handleLeave);
    track.addEventListener('touchstart', handleEnter, { passive: true });
    track.addEventListener('touchend', handleLeave, { passive: true });

    start();

    return () => {
      stop();
      if (track) {
        track.removeEventListener('mouseenter', handleEnter);
        track.removeEventListener('mouseleave', handleLeave);
        track.removeEventListener('touchstart', handleEnter);
        track.removeEventListener('touchend', handleLeave);
      }
    };
  }, []);

  const scroll = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
    }
  };

  return (
    <div className="slider-wrap" style={{ padding: '40px 0' }}>
      <button className="sb l" onClick={() => scroll(-1)} aria-label="Previous">
        <LuChevronLeft size={24} />
      </button>
      
      <div className="slider-track" id={id} ref={trackRef}>
        {loopDevs.map((dev, index) => (
          <div 
            key={`${dev.n}-${index}`} 
            className="dev-card"
            onClick={() => onEnquire && onEnquire(dev.n, `Are you looking for properties related to ${dev.n}? Our experts can help you find the perfect match.`)}
          >
            <img src={dev.l} alt={dev.n} loading="lazy" />
            <p>
              <strong>{dev.n}</strong>
              Explore more properties related to this developer
            </p>
          </div>
        ))}
      </div>
      
      <button className="sb r" onClick={() => scroll(1)} aria-label="Next">
        <LuChevronRight size={24} />
      </button>
    </div>
  );
}
