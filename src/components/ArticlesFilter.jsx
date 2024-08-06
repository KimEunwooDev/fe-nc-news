const ArticlesFilter = () => {
  return (
    <div className="filter">
      <label htmlFor="topics">Topic </label>
      <select name="topics">
        <option value="coding">Coding</option>
        <option value="football">Football</option>
        <option value="cooking">Cooking</option>
      </select>
    </div>
  );
};
export default ArticlesFilter;
