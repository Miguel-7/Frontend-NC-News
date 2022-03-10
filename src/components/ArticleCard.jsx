export default function ArticleCard({ article }) {
  return (
    <li className="articleCard">
      <h3>{article.title}</h3>
      <h3>{article.author}</h3>
    </li>
  );
}
