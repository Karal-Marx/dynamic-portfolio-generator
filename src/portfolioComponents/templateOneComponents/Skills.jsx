export default function Skills({ data }) {
  return (
    <section className="t1-skills-section">
      <h2>Skills</h2>
      <ul className="t1-skills-list">
        {data.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
