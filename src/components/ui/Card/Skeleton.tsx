import Skeleton from "react-loading-skeleton";

export default function CardSkeleton({ count }: { count?: number }) {
  return (
    <>
      {Array(count)
        .fill("")
        .map((_, index) => {
          return (
            <div key={`skeleton-list-${index}`}>
              <Skeleton height={176} />
              <div className="flex gap-4 mt-4 mb-2">
                <Skeleton width={50} />
                <Skeleton width={50} />
              </div>
              <Skeleton count={2} />
            </div>
          );
        })}
    </>
  );
}
