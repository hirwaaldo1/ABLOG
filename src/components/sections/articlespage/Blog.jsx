import { useGetArticlesQuery } from "../../../services/articlesApi";
import Card from "../../ui/Card";
import CardSkeleton from "../../ui/Card/Skeleton";
import ErrorFound from "../../ui/ErrorFound";
import NotFound from "../../ui/NotFound";

export default function Blog({ whichTab }) {
  const { data, isError, isLoading } = useGetArticlesQuery(whichTab);

  return (
    <>
      {isError && <ErrorFound />}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
        {isLoading ? (
          <CardSkeleton count={10} />
        ) : (
          data.map((article, index) => {
            return <Card key={`card-index-${index}`} article={article} />;
          })
        )}
      </div>

      {data?.length === 0 && <NotFound />}
    </>
  );
}
