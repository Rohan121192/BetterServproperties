export default function PageBanner({ title, subtitle }) {
  return (
    <div className="page-banner">
      <h1 className="reveal d1">{title}</h1>
      <p className="reveal d2">{subtitle}</p>
    </div>
  );
}
