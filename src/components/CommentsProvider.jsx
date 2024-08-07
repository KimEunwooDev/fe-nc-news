import CommentsList from "./CommentsList";
import { useState } from "react";

const CommentsProvider = ({ currentArticle }) => {
  const articleId = currentArticle.article_id;
  const [commentsById, setCommentsById] = useState([]);
  return (
    <CommentsList
      articleId={articleId}
      commentsById={commentsById}
      setCommentsById={setCommentsById}
    />
  );
};

export default CommentsProvider;
