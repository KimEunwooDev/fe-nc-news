import { getCommentsByID } from "../api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

const CommentsList = ({ articleId, commentsById, setCommentsById }) => {
  useEffect(() => {
    getCommentsByID(articleId)
      .then(({ comments }) => {
        setCommentsById(comments);
      })
      .catch((err) => console.log("error..."));
  }, [articleId]);
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
