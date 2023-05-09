import { Link } from "react-router-dom";
import getDateTime from "../../../utils/getDateTime";
import { Article } from "interfaces/articles";

export default function Card({ article }: { article: Article }) {
  const { title, urlToImage, publishedAt } = article;
  const date: Date = new Date(publishedAt);

  return (
    <Link to={`/article/:${title}`} state={article}>
      <div className="cursor-pointer group">
        <img
          src={urlToImage}
          className="w-full h-44 object-cover rounded-sm"
          alt={title}
        />
        <div className="flex gap-2 items-center text-gray-500 text-sm font-light mt-2">
          <span>{getDateTime(date.getMonth(), date.getDate())}</span>
          <span className="block w-1 h-1 rounded-full bg-gray-700" />
          <span>{date.getMinutes()} min</span>
        </div>
        <h5 className="text-lg font-semibold leading-4 group-hover:text-gray-700 line-clamp-2 pb-0.5">
          {title}
        </h5>
      </div>
    </Link>
  );
}
