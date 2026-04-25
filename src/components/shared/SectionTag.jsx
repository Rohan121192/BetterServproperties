export default function SectionTag({ children, center = false, className = '', style = {} }) {
  const centerStyle = center ? { justifyContent: 'center' } : {};
  return (
    <div className={`section-tag ${className}`.trim()} style={{ ...centerStyle, ...style }}>
      {children}
    </div>
  );
}
