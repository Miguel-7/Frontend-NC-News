import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useScreenSize from "../hooks/useScreenSize";
import * as api from "../utils/api";
// import CollapseWrapper from "./CollapseWrapper";

export default function Nav() {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  const { isMobile } = useScreenSize;

  useEffect(() => {
    api.fetchTopicBySlug().then(topics => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav>
      {/* <ul className="nav--list">
        <li className="nav--item">
          <Link className="nav--item__Link" to={`/articles`}>
            All
          </Link>
        </li>
      </ul> */}

      {/* {isMobile} ?{" "}
        <CollapseWrapper>
          {topics.map(({ topic_slug }) => {
            return (
              <li key={topic_slug} className="nav--item">
                <Link className="nav--item__item" to={`/topics/${topic_slug}`}>
                  {topic_slug}
                </Link>
              </li>
            );
          })}
        </CollapseWrapper>{" "}
        : */}

      {/* <label htmlFor="topics">Topic</label>
      <select name="topics" id="topics">
        {topics.map(({ topic_slug }) => {
          return (
            <option value={topic_slug}>
              <button onClick=
              <Link className="nav--item__item" to={`/topics/${topic_slug}`}>
                {topic_slug}
              </Link>
            </option>
          );
        })}
      </select> */}

      {/* {topics.map(({ topic_slug }) => {
          return (
            <li key={topic_slug} className="nav--item">
              <Link className="nav--item__item" to={`/topics/${topic_slug}`}>
                {topic_slug}
              </Link>
            </li>
          );
        })} */}
      {/* </ul> */}
    </nav>
  );
}
