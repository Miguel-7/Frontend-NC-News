import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-example-seminar-3-5.herokuapp.com/api",
});

export const fetchTopics = () => {
  return api.get("/topics").then(res => {
    return res.data.topics;
  });
};

export async function getArticles(topic_slug) {
  const {
    data: { articles },
  } = await api.get("/articles", { params: { topic: topic_slug } });
  return articles;
}
