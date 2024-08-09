import axios from "axios";

const api = axios.create({
  baseURL: "https://eunwoo-nc-news.onrender.com/api",
});

export const getArticles = (topic, sort_by = "created_at", order = "desc") => {
  return api
    .get(`/articles`, {
      params: {
        topic,
        sort_by,
        order,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const getTopics = () => {
  return api.get(`/topics`).then((response) => {
    const topicsArr = response.data;
    return topicsArr;
  });
};

export const getCommentsByID = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data;
  });
};

export const updateArticleByID = (article_id, num) => {
  return api.patch(`/articles/${article_id}`, {
    inc_votes: num,
  });
};

export const postComment = (article_id, username, body) => {
  const newComment = {
    username,
    body,
  };
  return api
    .post(`/articles/${article_id}/comments`, newComment)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

export const getUsers = () => {
  return api.get(`users`).then((response) => {
    return response.data;
  });
};

export const deleteComment = (comment_id) => {
  return api.delete(`comments/${comment_id}`);
};
