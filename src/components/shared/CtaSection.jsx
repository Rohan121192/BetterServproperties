import { Link } from 'react-router-dom';

export default function CtaSection({ tag, title, subtitle, btnText = 'Contact Us', btnLink = '/contact' }) {
  return (
    <section className="section" style={{ background: 'var(--bg-dark)', textAlign: 'center', padding: '80px 24px' }}>
      <div className="section-inner">
        <h2 className="section-title reveal d1" style={{ color: '#fff', marginBottom: '20px' }}>{title}</h2>
        <p className="section-subtitle reveal d2" style={{ color: 'rgba(255,255,255,0.5)', margin: '0 auto 36px' }}>{subtitle}</p>
        <div className="reveal d3">
          <Link to={btnLink} className="btn btn-blue">{btnText} <span className="btn-icon">→</span></Link>
        </div>
      </div>
    </section>
  );
}
