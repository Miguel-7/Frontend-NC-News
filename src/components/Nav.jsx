import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as api from "../utils/api";

export default function Nav() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.fetchTopics().then(topics => {
      setTopics(topics);
    });
  }, []);

  return (
    <ul className="navigation-list-topics">
      <Link className="link-articles" key="link-to-all" to="/">
        <li key="topic-all">all</li>
      </Link>
      {topics.map(topic => {
        return (
          <Link
            className="link-articles"
            key={`link-to-${topic.slug}`}
            to={`/topics/${topic.slug}`}
          >
            <li key={`topic-${topic.slug}`}>{topic.slug}</li>
          </Link>
        );
      })}
    </ul>
  );
}
