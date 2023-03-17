import { useGetArticlesQuery } from "../../../services/articlesApi";
import Card from "../../ui/Card";
import CardSkeleton from "../../ui/CardSkeleton";
import NotFound from "../../ui/NotFound";

export default function Blog({ whichTab }) {
  const { data, isError, isLoading } = useGetArticlesQuery(whichTab);
  return (
    <>
      {isError && <NotFound />}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
        {isLoading ? (
          <>
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

      {data?.length === 0 && <NotFound />}
    </>
  );
}
