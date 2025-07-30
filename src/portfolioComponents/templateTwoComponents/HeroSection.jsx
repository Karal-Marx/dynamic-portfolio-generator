export default function HeroSection({ data }) {
  return (
    <header className="t2-hero">
      <div className="t2-hero-left">
        <h1>{data.name}</h1>
        <h3>{data.title}</h3>
        <span className="t2-hero-tag">{data.tagline}</span>
      </div>
      {data.profileImage && (
        <div className="t2-hero-img-wrap">
          <img src={data.profileImage} alt="profile" className="t2-hero-img" />
        </div>
      )}
    </header>
  );
}
