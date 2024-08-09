import { useEffect, useState } from "react";
import { getArticles } from "../api";

import ArticleCard from "./ArticleCard";

const ArticlesList = ({ searchParams, setSearchParams }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  useEffect(() => {
    getArticles(topic, sort_by, order)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => console.log("error..."));
  }, [topic, sort_by, order]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
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
