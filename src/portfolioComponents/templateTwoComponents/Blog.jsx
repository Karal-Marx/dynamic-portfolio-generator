export default function Blog({ data }) {
  return (
    <section className="t2-blog">
      <h2>Blog Highlight</h2>
      <strong className="t2-blog-title">{data.title}</strong>
      <div className="t2-blog-summary">{data.summary}</div>
    </section>
  );
}
