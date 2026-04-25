export default function SectionWrapper({ bg = 'var(--bg)', style = {}, children, className = '' }) {
  return (
    <section className={`section ${className}`.trim()} style={{ background: bg, ...style }}>
      <div className="section-inner">
        {children}
      </div>
    </section>
  );
}
