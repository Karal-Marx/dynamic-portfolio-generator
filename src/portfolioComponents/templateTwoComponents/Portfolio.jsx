export default function Portfolio({ data }) {
  return (
    <section className="t2-portfolio">
      <h2>Projects</h2>
      <div className="t2-portfolio-grid">
        {data.map((proj, i) => (
          <div className="t2-portfolio-item" key={i}>
            {proj.image && <img src={proj.image} alt={proj.title} />}
            <h5>{proj.title}</h5>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
