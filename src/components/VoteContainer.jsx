import { updateArticleByID } from "../api";
import { useState } from "react";

const VoteContainer = ({ currentArticle }) => {
  const [incrementedVotes, setIncrementedVotes] = useState(0);
  const [isLikeError, setIsLikeError] = useState(false);
  const [clickedLike, setclickedLike] = useState(false);

  const incrementVotes = (num) => {
    setIncrementedVotes((currVotes) => currVotes + num);
    updateArticleByID(currentArticle.article_id, num)
      .then((data) => {
        if (num > 0) {
          setclickedLike(true);
        }
        if (num < 0) {
          setclickedLike(false);
        }
      })
      .catch(() => {
        setIncrementedVotes((currVotes) => currVotes - num);
        setIsLikeError(true);
      });
  };

  return (
    <div className="vote-box">
      <div>Liked : {currentArticle.votes + incrementedVotes}</div>
      {isLikeError ? <div>Your vote could not be counted.</div> : null}
      {clickedLike ? (
        <button
          className="unlike-button"
          onClick={() => {
            incrementVotes(-1);
          }}
        >
          Unlike
        </button>
      ) : (
        <button
          className="like-button"
          onClick={() => {
            incrementVotes(1);
          }}
        >
          Like
        </button>
      )}
    </div>
  );
};

export default VoteContainer;
