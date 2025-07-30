export default function Services({ data }) {
  return (
    <section className="t2-services">
      <h2>Services</h2>
      <div className="t2-services-cards">
        {data.map((srv, i) => (
          <article className="t2-service" key={i}>
            <h4>{srv.title}</h4>
            <p>{srv.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
