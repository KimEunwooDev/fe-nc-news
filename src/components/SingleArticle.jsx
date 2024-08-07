const SingleArticle = ({ currentArticle }) => {
  return (
    <>
      <h2>{currentArticle.title}</h2>
      <p>Author: {currentArticle.author}</p>
      <p>{currentArticle.created_at}</p>
      <img
        src={currentArticle.article_img_url}
        alt={`image of ${currentArticle.article_img_url}`}
      />
      <p>{currentArticle.body}</p>
    </>
  );
};

export default SingleArticle;
