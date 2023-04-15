import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArticles } from "../../../features/articles";
import { useGetArticlesQuery } from "../../../services/articlesApi";
import Card from "../../ui/Card";
import CardSkeleton from "../../ui/Card/Skeleton";
import ErrorFound from "../../ui/ErrorFound";
import NotFound from "../../ui/NotFound";

export default function Blog() {
  const {
    data: headlines,
    isLoading,
    isError,
  } = useGetArticlesQuery("headlines");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.articles);
  useEffect(() => {
    if (headlines) {
      dispatch(setArticles(headlines));
    }
  }, [dispatch, headlines]);

  return (
    <>
      {isError && <ErrorFound />}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
        {isLoading ? (
          <CardSkeleton count={10} />
        ) : data?.length === 0 ? (
          <NotFound />
        ) : (
          data.map((article, index) => {
            return <Card key={`card-index-${index}`} article={article} />;
          })
        )}
      </div>
    </>
  );
}
