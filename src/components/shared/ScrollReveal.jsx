export default function ScrollReveal({ children, className = '', delay = 0, direction = '' }) {
  // Build the CSS class list for reveal animation
  const delayClass = delay > 0 ? ` d${delay}` : '';
  const dirClass = direction ? ` ${direction}` : '';

  return (
    <div className={`reveal${dirClass}${delayClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
