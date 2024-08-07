const CommentCard = ({ comment }) => {
  return (
    <div className="comment-box">
      <div className="comment-header">
        <div>Author : {comment.author}</div>
        <time>{comment.created_at}</time>
      </div>
      <div className="comment-body">comment : {comment.body}</div>
      <div>vote : {comment.votes}</div>
    </div>
  );
};

export default CommentCard;
