// const newComment = {
//     username: "rogersop",
//     body: "It is so interesting !",
//   };
import { useEffect, useState } from "react";
import { postComment } from "../api";

const CommentAdder = ({ articleId, setCommentsById }) => {
  const [userName, setUserName] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [isSucces, setIsSucces] = useState(false);

  const userNameHandler = (e) => {
    console.log(e.target.value);
    const username = e.target.value;
    setUserName(username);
  };

  const commentBodyHandler = (e) => {
    console.log(e.target.value);
    const newCommentBody = e.target.value;
    setCommentBody(newCommentBody);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postComment(articleId, userName, commentBody).then((data) => {
      const postedComment = { ...data.postedComment };
      setCommentsById((prevComments) => {
        const copyComments = [...prevComments];
        copyComments.push(data.postedComment);
        return copyComments;
      });
      setUserName("");
      setCommentBody("");
      setIsSucces(true);
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="username">User Name: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={userName}
          onChange={userNameHandler}
        />
        <br />
        <br />
        <label htmlFor="comment-body"></label>
        <textarea
          type="text"
          id="comment-body"
          placeholder="Type Comment..."
          value={commentBody}
          onChange={commentBodyHandler}
        />
        <br />
        <br />
        {isSucces ? <p>Your comment has been successfully added!</p> : null}
        <button onClick={submitHandler}>Add Comment</button>
      </form>
    </div>
  );
};

export default CommentAdder;
