import { useSelector } from "react-redux";
import Card from "../../ui/Card";
import CardSkeleton from "../../ui/Card/Skeleton";
import ErrorFound from "../../ui/ErrorFound";
import NotFound from "../../ui/NotFound";

export default function Blog() {
  const data = useSelector((state) => state.headlines);
  return (
    <>
      {data.isError && <ErrorFound />}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
        {data.isLoading
          ? Array(10)
              .fill()
              .map((v, k) => {
                return <CardSkeleton key={`article-list-${k}`} />;
              })
          : data.value?.map((article, index) => {
              return <Card key={`card-index-${index}`} article={article} />;
            })}
      </div>
      {data?.length === 0 && <NotFound />}
    </>
  );
}
