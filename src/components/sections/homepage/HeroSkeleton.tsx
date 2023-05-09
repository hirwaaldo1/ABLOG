import Skeleton from "react-loading-skeleton";

export default function HeroSkeleton(): React.ReactElement {
  return (
    <div className="relative h-[34.375rem] rounded-md z-50 mb-32 md:mb-20">
      <Skeleton height={550} />
      <div className="z-40 w-full md:w-[30.375rem] min-h-[12rem] md:min-h-[14rem] md:left-10 bg-[#9696962d] -bottom-24 md:-bottom-14 absolute shadow-md rounded-md py-6 px-7">
        <h1 className="text-xl md:text-3xl font-semibold line-clamp-3">
          <Skeleton count={3} />
        </h1>
        <div className="flex gap-4 items-center absolute bottom-5">
          <div className="flex gap-3 items-center">
            <Skeleton circle={true} height={36} width={36} />
            <span>
              <Skeleton />
            </span>
          </div>
          <span>
            <Skeleton />
          </span>
        </div>
      </div>
    </div>
  );
}
