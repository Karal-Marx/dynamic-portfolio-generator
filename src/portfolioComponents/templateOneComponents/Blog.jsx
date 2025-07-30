export default function Blog({ data }) {
  return (
    <section className="t1-blog-section">
      <h2>Blog</h2>
      <h3>{data.title}</h3>
      <p>{data.summary}</p>
    </section>
  );
}
