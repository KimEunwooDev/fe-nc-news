import { useContext } from "react";
import { UserContext } from "./context/UserProvider";
import dateFormat from "dateformat";
import { deleteComment } from "../api";

const CommentCard = ({ comment }) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const comment_id = comment.comment_id;
  console.log(comment_id, "cooment id");
  const refreshPage = () => {
    location.href = location.href;
  };

  const deleteHandler = (comment_id) => {
    deleteComment(comment_id).then(() => {
      alert("Comment deleted.");
      refreshPage();
    });
  };
  return (
    <div className="comment-box">
      <div className="comment-header">
        <div>Author : {comment.author}</div>
        <time>{dateFormat(comment.created_at, "mmmm dS, yyyy")}</time>
      </div>
      <div className="comment-body">comment : {comment.body}</div>
      <div>vote : {comment.votes}</div>
      <>
        {loggedInUser.username === comment.author && (
          <button
            id="delete-button"
            onClick={() => {
              deleteHandler(comment.comment_id);
            }}
          >
            Delete
          </button>
        )}
      </>
    </div>
  );
};

export default CommentCard;
