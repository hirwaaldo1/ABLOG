import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArticles } from "../../../features/articles";
import { useGetArticlesQuery } from "../../../services/articlesApi";
import Card from "../../ui/Card";
import CardSkeleton from "../../ui/Card/Skeleton";
import ErrorFound from "../../ui/ErrorFound";
import NotFound from "../../ui/NotFound";
import { Articles } from "interfaces/articles";
import { AnyAction } from "redux";

export default function Blog(): React.ReactElement {
  const {
    data: headlines,
    isLoading,
    isError,
  } = useGetArticlesQuery("headlines");
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const data = useSelector((state: Articles) => state.articles);
  useEffect(() => {
    if (headlines) {
      dispatch(setArticles(headlines));
    }
  }, [dispatch, headlines]);

  return (
    <>
      {isError && <ErrorFound />}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5 relative">
        {isLoading ? (
          <CardSkeleton count={10} />
        ) : data?.length === 0 ? (
          <div className="w-full h-full m-auto absolute">
            <NotFound />
          </div>
        ) : (
          data.map((article, index) => {
            return <Card key={`card-index-${index}`} article={article} />;
          })
        )}
      </div>
    </>
  );
}
