import { useLocation } from "react-router-dom";
import getDateTime from "../utils/getDateTime";

export default function Article() {
  const { state } = useLocation();
  const date = new Date(state.publishedAt);
  return (
    <div className="grid md:grid-cols-3 gap-10 md:gap-20 my-12">
      <div className="flex flex-col gap-8 my-auto">
        <h1 className="text-5xl font-bold">{state.title}</h1>
        <p>{state.description}</p>
        <div className="flex justify-between">
          <p className="font-bold">{state.source.name}</p>
          <div className="flex gap-2 items-center text-gray-500 text-base font-light">
            <span>{getDateTime(date.getMonth(), date.getDay())}</span>
            <span className="block w-1 h-1 rounded-full bg-gray-700" />
            <span>{date.getMinutes()} min</span>
          </div>
        </div>
        <a href={state.url} target="_blank" rel="noreferrer">
          <button className="bg-green-500 py-3 px-12 rounded-sm text-white w-fit">
            Read More
          </button>
        </a>
      </div>
      <div className="md:col-span-2 my-auto">
        <img
          src={state.urlToImage}
          className="w-full object-cover rounded-sm"
          alt={state.title}
        />
      </div>
    </div>
  );
}
