import { useSelector } from "react-redux";
import Card from "../../ui/Card";
import CardSkeleton from "../../ui/Card/Skeleton";
import ErrorFound from "../../ui/ErrorFound";
import NotFound from "../../ui/NotFound";

export default function Blog({ headlines }) {
  const data = useSelector((state) =>
    headlines ? state.headlines : state.articles
  );
  return (
    <>
      {data.isError && <ErrorFound />}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
        {data.isLoading ? (
          <CardSkeleton count={10} />
        ) : (
          data.value?.map((article, index) => {
            return <Card key={`card-index-${index}`} article={article} />;
          })
        )}
      </div>

      {data.value?.length === 0 && <NotFound />}
    </>
  );
}