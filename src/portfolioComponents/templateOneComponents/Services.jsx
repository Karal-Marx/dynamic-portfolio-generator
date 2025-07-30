export default function Services({ data }) {
  return (
    <section className="t1-services-section">
      <h2>Services</h2>
      <div className="t1-services-list">
        {data.map((srv, i) => (
          <div className="t1-service-card" key={i}>
            <h3>{srv.title}</h3>
            <p>{srv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
