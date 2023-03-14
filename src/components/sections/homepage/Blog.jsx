import { useGetHeadlinesQuery } from "../../../services/articlesApi";
import Card from "../../ui/Card";
import CardSkeleton from "../../ui/CardSkeleton";

export default function Blog() {
  const { data: headlines, isLoading } = useGetHeadlinesQuery();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
      {isLoading === true ? (
        <>
          {Array(10)
            .fill()
            .map((v, k) => {
              return <CardSkeleton key={`article-list-${k}`} />;
            })}
        </>
      ) : (
        <>
          {headlines?.articles.map((article, index) => {
            return <Card key={`card-index-${index}`} {...article} />;
          })}
        </>
      )}
    </div>
  );
}
