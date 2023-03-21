import Link from "next/link";
import { useSelector } from "react-redux";
import getDateTime from "../../utils/getDateTime";

export default function Article() {
  const state = useSelector((state) => state.article);
  const { title, description, publishedAt, url, urlToImage, source } = state;
  const date = new Date(publishedAt);
  return (
    <div className="grid md:grid-cols-3 gap-10 md:gap-20 my-12">
      {description && (
        <>
          <div className="flex flex-col gap-8 my-auto">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p>{description}</p>
            <div className="flex justify-between">
              <p className="font-bold">{source.name}</p>
              <div className="flex gap-2 items-center text-gray-500 text-base font-light">
                <span>{getDateTime(date.getMonth(), date.getDay())}</span>
                <span className="block w-1 h-1 rounded-full bg-gray-700" />
                <span>{date.getMinutes()} min</span>
              </div>
            </div>
            <Link href={url} target="_blank" rel="noreferrer">
              <button className="bg-green-500 py-3 px-12 rounded-sm text-white w-fit">
                Read More
              </button>
            </Link>
          </div>
          <div className="md:col-span-2 my-auto">
            <img
              src={urlToImage}
              className="w-full object-cover rounded-sm"
              alt={title}
            />
          </div>
        </>
      )}
    </div>
  );
}
