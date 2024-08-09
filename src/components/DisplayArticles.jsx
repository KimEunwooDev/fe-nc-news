import ArticlesList from "./ArticlesList";
import ArticlesFilter from "./ArticlesFilter";

const DisplayArticles = ({ searchParams, setSearchParams }) => {
  return (
    <>
      <ArticlesFilter
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <ArticlesList
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </>
  );
};

export default DisplayArticles;
