import { Link } from "react-router-dom";
import getMonthName from "../../utils/getMonthName";

export default function Card({ ...props }) {
  const { title, urlToImage, publishedAt } = props;
  const date = new Date(publishedAt);
  return (
    <Link to={`/article/:${title}`} state={props}>
      <div className="cursor-pointer group">
        <img
          src={urlToImage}
          className="w-full h-44 object-cover rounded-sm"
          alt={title}
        />
        <div className="flex gap-2 items-center text-gray-500 text-sm font-light mt-4 mb-2">
          <span>
            {getMonthName(date.getMonth())} {date.getDay()}
          </span>
          <span className="block w-1 h-1 rounded-full bg-gray-700" />
          <span>{date.getMinutes()} min</span>
        </div>
        <h5 className="text-lg font-bold leading-6 group-hover:text-gray-700">
          {title.substring(0, 55)}...
        </h5>
      </div>
    </Link>
  );
}
