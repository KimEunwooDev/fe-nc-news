import { updateArticleByID } from "../api";
import { useState } from "react";

const VoteContainer = ({ currentArticle }) => {
  const [incrementedVotes, setIncrementedVotes] = useState(0);
  const [isLikeError, setIsLikeError] = useState(false);

  const incrementVotes = (num) => {
    setIncrementedVotes((currVotes) => currVotes + num);
    updateArticleByID(currentArticle.article_id, num).catch(() => {
      setIncrementedVotes((currVotes) => currVotes - num);
      setIsLikeError(true);
    });
  };

  return (
    <div className="vote-box">
      <div>Liked : {currentArticle.votes + incrementedVotes}</div>
      {isLikeError ? <div>Your vote could not be counted.</div> : null}
      <button
        className="like-button"
        onClick={() => {
          incrementVotes(1);
        }}
      >
        Like
      </button>
      <button
        className="unlike-button"
        onClick={() => {
          incrementVotes(-1);
        }}
      >
        Unlike
      </button>
    </div>
  );
};

export default VoteContainer;
