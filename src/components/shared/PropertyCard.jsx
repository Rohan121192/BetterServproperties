import { LuBed, LuRuler, LuMapPin } from 'react-icons/lu';

export default function PropertyCard({ property, onEnquire }) {
  const p = property;
  return (
    <div className="prop-card">
      <div className="iw">
        <img src={p.img} alt={p.t} loading="lazy" />
        <span className="badge-tag">{p.tg}</span>
      </div>
      <div className="bd">
        <h4>{p.t}</h4>
        <div className="loc">
          <LuMapPin size={14} style={{ flexShrink: 0 }} /> {p.l}
        </div>
        <div className="meta">
          <span><LuBed size={14} /> {p.b} Beds</span>
          <span><LuRuler size={14} /> {p.a}</span>
        </div>
        <div className="rw">
          <span className="price">{p.p}</span>
          <button
            className="vb"
            onClick={() => onEnquire && onEnquire(p.t, `${p.l} — ${p.p}`)}
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}
