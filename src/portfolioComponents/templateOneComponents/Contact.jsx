export default function Contact({ data }) {
  return (
    <section className="t1-contact-section">
      <h2>Contact</h2>
      <p>{data.message}</p>
      <ul className="t1-contact-list">
        <li>Email: {data.email}</li>
        <li>Phone: {data.phone}</li>
      </ul>
    </section>
  );
}
