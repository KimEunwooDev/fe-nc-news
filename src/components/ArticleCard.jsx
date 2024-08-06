import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  console.log(article.article_id, "article.article_id in ArticleCard");
  return (
    <Link to={`/articles/${article.article_id}`}>
      <div className="article-card">
        <img src={article.article_img_url} alt="" />
        <header className="article-card-title">Title: {article.title}</header>
        <p className="article-author">Author: {article.author}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
