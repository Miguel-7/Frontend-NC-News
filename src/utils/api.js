import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-example-seminar-3-5.herokuapp.com/api",
});
export async function getArticles() {
  const {
    data: { articles },
  } = await api.get("/articles");
  return articles;
}
