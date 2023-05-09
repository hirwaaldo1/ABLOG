import Skeleton from "react-loading-skeleton";

export default function NavSkeleton({ count }: { count: number }) {
  return (
    <>
      {Array(count)
        .fill("")
        .map((_, index: number) => (
          <Skeleton key={`tab-skeleton-${index}`} width={100} />
        ))}
    </>
  );
}
