import { getCommentsByID } from "../api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

const CommentsList = ({ articleId, commentsById, setCommentsById }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [noComments, setNoComments] = useState(false);

  useEffect(() => {
    getCommentsByID(articleId)
      .then(({ comments }) => {
        setCommentsById(comments);
        setIsLoading(false);
        console.log(comments);
      })
      .catch((err) => {
        if (err.response.data.status === 404) {
          setNoComments(true);
        }
      });
  }, [articleId]);

  if (noComments) {
    return <h2>No Comments</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="comments-container">
      <h3>Comments</h3>
      <ul className="comments-list">
        {commentsById.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsList;
