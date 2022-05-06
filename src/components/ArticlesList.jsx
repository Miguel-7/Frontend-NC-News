import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.getArticles(topic_slug).then(articles => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic_slug]);

  if (isLoading) return <h2>loading...</h2>;

  return (
    <main>
      <h2>Articles</h2>
      <ul className="articles-list">
        {articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </main>
  );
}
