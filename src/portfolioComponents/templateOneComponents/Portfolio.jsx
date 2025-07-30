export default function Portfolio({ data }) {
  return (
    <section className="t1-portfolio-section">
      <h2>Portfolio</h2>
      <div className="t1-portfolio-list">
        {data.map((proj, i) => (
          <div className="t1-portfolio-card" key={i}>
            {proj.image && <img src={proj.image} alt={proj.title} />}
            <h4>{proj.title}</h4>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
