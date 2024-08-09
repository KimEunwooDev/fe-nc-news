import VoteContainer from "./VoteContainer";
import dateFormat from "dateformat";

const SingleArticle = ({ currentArticle }) => {
  return (
    <div className="single-article">
      <h2>{currentArticle.title}</h2>
      <p>Author: {currentArticle.author}</p>
      <p>{dateFormat(currentArticle.created_at, "mmmm dS, yyyy")}</p>
      <img
        src={currentArticle.article_img_url}
        alt={`image of ${currentArticle.article_img_url}`}
      />
      <p>{currentArticle.body}</p>
      <VoteContainer currentArticle={currentArticle} />
    </div>
  );
};

export default SingleArticle;
