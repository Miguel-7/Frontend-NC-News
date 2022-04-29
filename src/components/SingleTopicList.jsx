import React, { useState, useEffect } from "react";
import { fetchTopicBySlug } from "../utils/api";
import { useParams } from "react-router";

export default function SingleTopicList() {
  const [topic, setTopic] = useState([]);
  const { topic_slug } = useParams();

  useEffect(() => {
    fetchTopicBySlug(topic_slug).then(topicData => {
      setTopic(topicData);
    });
  }, [topic_slug]);

  return (
    <div>
      <h2>{topic_slug}</h2>
    </div>
  );
}
