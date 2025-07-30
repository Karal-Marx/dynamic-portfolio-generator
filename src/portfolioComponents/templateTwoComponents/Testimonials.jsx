export default function Testimonials({ data }) {
  return (
    <section className="t2-testimonials">
      <h2>What Clients Say</h2>
      <div className="t2-testimonial-cards">
        {data.map((quote, i) => (
          <blockquote key={i} className="t2-testimonial">{quote}</blockquote>
        ))}
      </div>
    </section>
  );
}
