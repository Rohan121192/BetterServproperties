import { useRef, useEffect } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import PropertyCard from './PropertyCard';

export default function PropertySlider({ properties, id, onEnquire }) {
  const trackRef = useRef(null);

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
        
        const scrollAmount = card.offsetWidth + 24; // Width + gap
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
    <div className="slider-wrap">
      <button className="sb l" onClick={() => scroll(-1)} aria-label="Previous">
        <LuChevronLeft size={24} />
      </button>
      
      <div className="slider-track" id={id} ref={trackRef}>
        {properties.map((prop, index) => (
          <PropertyCard key={`${prop.id}-${index}`} property={prop} onEnquire={onEnquire} />
        ))}
      </div>
      
      <button className="sb r" onClick={() => scroll(1)} aria-label="Next">
        <LuChevronRight size={24} />
      </button>
    </div>
  );
}
