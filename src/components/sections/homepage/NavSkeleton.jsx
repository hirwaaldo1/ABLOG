import Skeleton from "react-loading-skeleton";

export default function NavSkeleton() {
  return Array(5)
    .fill()
    .map((_, index) => <Skeleton key={`tab-skeleton-${index}`} width={100} />);
}
