import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import "../styling/ArticlesList.css";
import { Link, useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { topic_slug } = useParams();
  const navigate = useNavigate();

  console.log(topic_slug);

  // 1 - getting articles by that topic - DONE
  // 2 - Add buttons to my select dropdown
  // 3 - use useNavigate

  useEffect(() => {
    setIsLoading(true);
    api.getArticles(topic_slug).then(articles => {
      setArticles(articles);
      // setError({ msg, status });
      setIsLoading(false);
    });
  }, [topic_slug]);

  function handleChange(event) {
    event.preventDefault();
    // api
    //   .getArticles(topic_slug)
    //   .then(() => {
    //     navigate(`/topics/${topic_slug}`);
    //   })
    //   .catch(err => {
    //     return <ErrorPage status={err.status} msg={err.msg} />;
    //   });
    const onChange = event => {
      navigate(`/topics/${event.target.value}`);
    };
    if (err) {
      return <ErrorPage status={err.status} msg={err.msg} />;
    } else {
      return onChange;
    }
  }

  if (isLoading) return <h2>loading...</h2>;
  // if (error) return <ErrorPage status={error.status} msg={error.msg} />;
  return (
    <main>
      <h2>Articles</h2>
      {/* <h2>Articles for {"All Topics"}</h2> */}
      {/* <h2>Articles for {topic_slug ? topic_slug : "All Topics"}</h2> */}
      <ul className="al--list">
        <li className="al--item">
          <Link className="al--item__Link" to={`/articles`}>
            All
          </Link>
        </li>
      </ul>

      <ul className="articleList">
        {articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>

      <label htmlFor="topics">Topic</label>
      {/* <select name="topics" id="topics"> */}
      <select onChange={handleChange}>
        {articles.map(({ topic_slug }) => {
          return (
            <option value={topic_slug}>
              <button>{topic_slug}</button>
              {/* <Link className="nav--item__item" to={`/topics/${topic_slug}`}>
                {topic_slug}
              </Link> */}
            </option>
          );
        })}
      </select>
    </main>
  );
}
