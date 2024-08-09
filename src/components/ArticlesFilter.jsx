const ArticlesFilter = ({ searchParams, setSearchParams }) => {
  const topicChange = (e) => {
    const topic = e.target.value;
    if (topic) {
      setSearchParams({ topic });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="filter">
      <label htmlFor="topics">Topic </label>
      <select name="topics" onChange={topicChange}>
        <option value="">All</option>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
        <option value="cooking">Cooking</option>
      </select>
    </div>
  );
};
export default ArticlesFilter;
