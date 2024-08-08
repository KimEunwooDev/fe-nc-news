import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <div className="article-card">
        <img
          className="article-img"
          src={article.article_img_url}
          alt={article.title}
        />
        <header className="article-card-title">Title: {article.title}</header>
        <p className="article-author">Author: {article.author}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
