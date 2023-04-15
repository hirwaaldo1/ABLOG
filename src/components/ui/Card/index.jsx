import { Link } from "react-router-dom";
import getDateTime from "../../../utils/getDateTime";

export default function Card({ article }) {
  const { title, urlToImage, publishedAt } = article;
  const date = new Date(publishedAt);
  return (
    <Link to={`/article/:${title}`} state={article}>
      <div className="cursor-pointer group">
        <img
          src={urlToImage}
          className="w-full h-44 object-cover rounded-sm"
          alt={title}
        />
        <div className="flex gap-2 items-center text-gray-500 text-sm font-light mt-4 mb-2">
          <span>{getDateTime(date.getMonth(), date.getDay())}</span>
          <span className="block w-1 h-1 rounded-full bg-gray-700" />
          <span>{date.getMinutes()} min</span>
        </div>
        <h5 className="text-lg font-bold leading-6 group-hover:text-gray-700 line-clamp-2">
          {title}
        </h5>
      </div>
    </Link>
  );
}
