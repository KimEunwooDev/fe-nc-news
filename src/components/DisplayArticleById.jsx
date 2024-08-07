import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleArticle from "./SingleArticle";
import CommentsProvider from "./CommentsProvider";

const DisplayArticleById = () => {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://eunwoo-nc-news.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        const { article } = response.data;
        setCurrentArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        return "error!";
      });
  }, [article_id]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <SingleArticle currentArticle={currentArticle} />
      <CommentsProvider currentArticle={currentArticle} />
    </>
  );
};

export default DisplayArticleById;
