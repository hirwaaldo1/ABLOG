import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navigation from "../components/sections/homepage/Navigation";
import { setPublishers } from "../features/publishers";
import { publishersApi } from "../services/publishersApi";
import { articlesApi } from "../services/articlesApi";
import { setHeadlines } from "../features/headlines";
import Blog from "../components/sections/Blog";

export default function Home({ publishers, blogList }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setPublishers({
        value: publishers.sources,
        isError: publishers.status === "ok" ? false : true,
        isLoading: false,
      })
    );
    dispatch(
      setHeadlines({
        value: blogList.articles,
        backupValues: blogList.articles,
        isError: blogList.status === "ok" ? false : true,
        isLoading: false,
      })
    );
  }, [dispatch, publishers, blogList]);
  return (
    <div>
      <Navigation />
      <Blog headlines />
    </div>
  );
}

export async function getStaticProps() {
  const publishers = await publishersApi();
  const articles = await articlesApi("headlines");
  return {
    props: {
      publishers: publishers,
      blogList: articles,
    },
  };
}
