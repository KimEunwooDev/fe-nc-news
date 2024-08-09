import { useEffect } from "react";
import { getTopics } from "../api";
import { useState } from "react";

const ArticlesFilter = ({ searchParams, setSearchParams }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  const topicChange = (e) => {
    const topic = e.target.value;
    if (topic) {
      setSearchParams({ topic });
    }
  };

  const sortChange = (e) => {
    const sort_by = e.target.value;
    const topic = searchParams.get("topic");
    const order = searchParams.get("order");

    if (topic && sort_by && order) {
      setSearchParams({ topic, sort_by, order });
    } else if (topic && sort_by) {
      setSearchParams({ topic, sort_by });
    } else if (sort_by && order) {
      setSearchParams({ sort_by, order });
    } else {
      setSearchParams({ sort_by });
    }
  };

  const orderChange = (e) => {
    const order = e.target.value;
    const topic = searchParams.get("topic");
    const sort_by = searchParams.get("sort_by");

    if (order && topic && sort_by) {
      setSearchParams({ topic, sort_by, order });
    } else {
      setSearchParams({ order });
    }
  };

  return (
    <div className="filter">
      <label htmlFor="topics">Topic </label>
      <select name="topics" onChange={topicChange}>
        <option value="">All</option>
        {topics.map((topic) => {
          return (
            <option value={topic.slug} key={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>
      <label htmlFor="sort_by">Sort </label>
      <select name="sort_by" onChange={sortChange}>
        <option value="created_at">date</option>
        <option value="comment_count">comment</option>
        <option value="votes">votes</option>
      </select>
      <label htmlFor="order">order </label>
      <select name="order" onChange={orderChange}>
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </select>
    </div>
  );
};
export default ArticlesFilter;
