export default function ArticleCard({ article }) {
  return (
    <section className="article-card">
      <h3>{article.title}</h3>
      <h3>{article.author}</h3>
    </section>
  );
}
