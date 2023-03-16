import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../../features/articles";
import { useGetArticlesQuery } from "../../../services/articlesApi";
import Card from "../../ui/Card";
import CardSkeleton from "../../ui/CardSkeleton";
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
      dispatch(set(headlines));
    }
  }, [dispatch, headlines]);
  return (
    <>
      {isError && <NotFound />}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
        {isLoading ? (
          <>
            {" "}
            {Array(10)
              .fill()
              .map((v, k) => {
                return <CardSkeleton key={`article-list-${k}`} />;
              })}
          </>
        ) : (
          data.map((article, index) => {
            return <Card key={`card-index-${index}`} {...article} />;
          })
        )}
      </div>

      {data.length === 0 && <NotFound />}
    </>
  );
}
