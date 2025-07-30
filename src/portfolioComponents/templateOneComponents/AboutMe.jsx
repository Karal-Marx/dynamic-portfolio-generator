export default function AboutMe({ data }) {
  return (
    <section className="t1-about-section">
      <h2>About Me</h2>
      <p className="t1-about-bio">{data.bio}</p>
      <ul className="t1-about-list">
        <li>Email: {data.email}</li>
        <li>Phone: {data.phone}</li>
        <li>Location: {data.location}</li>
        {data.socials && <li>Socials: {data.socials}</li>}
      </ul>
    </section>
  );
}
