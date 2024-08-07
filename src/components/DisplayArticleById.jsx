import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleArticle from "./SingleArticle";

const DisplayArticleById = () => {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    axios
      .get(`https://eunwoo-nc-news.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        console.log(response.data, "response in DAB");
        const { article } = response.data;
        setCurrentArticle(article);
      })
      .catch((err) => {
        return "error!";
      });
  }, [article_id]);

  return (
    <>
      <SingleArticle currentArticle={currentArticle} />
    </>
  );
};

export default DisplayArticleById;
