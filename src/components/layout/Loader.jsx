import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="app-loader" className={`app-loader${hidden ? ' hidden' : ''}`}>
      <img src="/logo.png" alt="Loading..." className="loader-logo" />
    </div>
  );
}
