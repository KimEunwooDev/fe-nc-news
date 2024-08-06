import axios from "axios";

const api = axios.create({
  baseURL: "https://eunwoo-nc-news.onrender.com/api",
});

export const getAllArticles = () => {
  return api.get(`/articles`).then((response) => {
    return response.data;
  });
};

export const getTopics = () => {
  return api.get(`/topics`).then((response) => {
    const topicsArr = response.data;
    return topicsArr;
  });
};
