export default function HeroSection({ data }) {
  return (
    <section className="t1-hero-section">
      {data.profileImage && (
        <img className="t1-hero-img" src={data.profileImage} alt={data.name || "profile"} />
      )}
      <h1 className="t1-hero-name">{data.name}</h1>
      <h2 className="t1-hero-title">{data.title}</h2>
      <p className="t1-hero-tagline">{data.tagline}</p>
    </section>
  );
}
