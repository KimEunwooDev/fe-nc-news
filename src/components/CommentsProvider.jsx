import CommentsList from "./CommentsList";
import CommentAdder from "./CommentAdder";
import { useState } from "react";

const CommentsProvider = ({ currentArticle }) => {
  const articleId = currentArticle.article_id;
  const [commentsById, setCommentsById] = useState([]);
  return (
    <>
      <CommentsList
        articleId={articleId}
        commentsById={commentsById}
        setCommentsById={setCommentsById}
      />
      <CommentAdder articleId={articleId} setCommentsById={setCommentsById} />
    </>
  );
};

export default CommentsProvider;
