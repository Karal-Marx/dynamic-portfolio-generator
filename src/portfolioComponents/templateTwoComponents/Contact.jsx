export default function Contact({ data }) {
  return (
    <section className="t2-contact">
      <h2>Get In Touch</h2>
      <div className="t2-contact-message">{data.message}</div>
      <div className="t2-contact-info">
        <span>Email: {data.email}</span>
        <span>Phone: {data.phone}</span>
      </div>
    </section>
  );
}
