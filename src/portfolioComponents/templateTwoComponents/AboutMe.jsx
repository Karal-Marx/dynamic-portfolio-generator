export default function AboutMe({ data }) {
  return (
    <section className="t2-about">
      <h2>About</h2>
      <div className="t2-about-main">
        <span className="t2-about-bio">{data.bio}</span>
        <div className="t2-about-details">
          <div>Email: {data.email}</div>
          <div>Phone: {data.phone}</div>
          <div>Location: {data.location}</div>
          {data.socials && <div>Socials: {data.socials}</div>}
        </div>
      </div>
    </section>
  );
}
