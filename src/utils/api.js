import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-example-seminar-3-5.herokuapp.com/api",
});

// export async function getArticles() {
//   const {
//     data: { articles },
//   } = await api.get("/articles");
//   return articles;
// }

export const fetchTopicBySlug = topic_slug => {
  return api.get(`/topics/${topic_slug}`).then(res => {
    return res.data.topic;
  });
};

// export async function getArticlesByTopic(topic_slug) {
//   const {
//     data: { articles },
//   } = await api.get("/articles", { params: { topic_slug } });
//   return articles;
// }

export async function getArticles(topic_slug) {
  const {
    data: { articles },
  } = await api.get("/articles", { params: { topic: topic_slug } });
  return articles;
}
