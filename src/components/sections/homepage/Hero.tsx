import { Article } from "interfaces/articles";
import getDateTime from "utils/getDateTime";
import HeroSkeleton from "./HeroSkeleton";

export default function Hero({
  data,
  isError,
  isLoading,
}: {
  data: Article[];
  isError: boolean;
  isLoading: boolean;
}): React.ReactElement {
  if (isError) {
    return null;
  }
  if (isLoading) {
    return <HeroSkeleton />;
  }

  const date: Date = new Date(data[0].publishedAt);
  return (
    <div className="relative h-[34.375rem] rounded-md z-50 mb-32 md:mb-20">
      <img
        className="absolute w-full h-full object-cover -z-10 rounded-md"
        src={data[0].urlToImage}
        alt={data[0].title}
      />
      <div className="z-40 w-full md:w-[30.375rem] min-h-[12rem] md:min-h-[14rem] md:left-10 bg-white -bottom-24 md:-bottom-14 absolute shadow-md rounded-md py-6 px-7">
        <h1 className="text-xl md:text-3xl font-semibold line-clamp-3">
          {data[0].title}
        </h1>
        <div className="flex gap-4 items-center absolute bottom-5">
          <div className="flex gap-3 items-center">
            <img
              className="bg-black rounded-full"
              src="/assets/person.png"
              width={36}
              height={36}
              alt="person"
            />
            <span>{data[0].source.name}</span>
          </div>
          <span>{getDateTime(date.getMonth(), date.getDate())}</span>
        </div>
      </div>
    </div>
  );
}
