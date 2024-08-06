import { useEffect, useState } from "react";
import { getAllArticles } from "../api";

import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles()
      .then(({ articles }) => {
        setArticles(articles);
      })
      .catch((err) => console.log("error..."));
  }, []);
  return (
    <>
      <section>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </>
  );
};

export default ArticlesList;
