export default function Skills({ data }) {
  return (
    <section className="t2-skills">
      <h2>My Skills</h2>
      <div className="t2-skills-badges">
        {data.map((skill, i) => (
          <span key={i} className="t2-skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  );
}
