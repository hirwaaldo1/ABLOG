import getDateTime from "../../../utils/getDateTime";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setArticle } from "../../../features/article";
export default function Card({ article }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { title, urlToImage, publishedAt, source } = article;
  const date = new Date(publishedAt);
  return (
    <div
      onClick={() => {
        dispatch(setArticle(article));
        router.push(`/article/${source.name}`);
      }}
    >
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
    </div>
  );
}
