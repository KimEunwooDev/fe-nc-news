import DisplayArticles from "./DisplayArticles";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <DisplayArticles
      searchParams={searchParams}
      setSearchParams={setSearchParams}
    />
  );
};

export default Home;
