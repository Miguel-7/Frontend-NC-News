import { useEffect, useState } from "react";
// import { useParams } from "react-router";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import "../styling/ArticlesList.css";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const { article_slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.getArticles().then(articles => {
      setArticles(articles);
      // setError({ msg, status });
      setIsLoading(false);
    });
  }, []);
  // }, [topic_slug]);

  if (isLoading) return <h2>loading...</h2>;
  // if (error) return <ErrorPage status={error.status} msg={error.msg} />;
  return (
    <main>
      <h2>Articles</h2>
      {/* <h2>Articles for {"All Topics"}</h2> */}
      {/* <h2>Articles for {topic_slug ? topic_slug : "All Topics"}</h2> */}
      <ul className="articleList">
        {articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </main>
  );
}
