export default function Testimonials({ data }) {
  return (
    <section className="t1-testimonial-section">
      <h2>Testimonials</h2>
      <ul className="t1-testimonial-list">
        {data.map((quote, i) => (
          <li key={i} className="t1-testimonial-quote">
            "{quote}"
          </li>
        ))}
      </ul>
    </section>
  );
}
