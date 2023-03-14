import Skeleton from "react-loading-skeleton";

export default function CardSkeleton() {
  return (
    <div>
      <Skeleton height={176} />
      <div className="flex gap-4 mt-4 mb-2">
        <Skeleton width={50} />
        <Skeleton width={50} />
      </div>
      <Skeleton count={2} />
    </div>
  );
}
