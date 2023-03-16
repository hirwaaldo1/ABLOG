import { useEffect, useState } from "react";
import { useGetPublisherQuery } from "../../../services/publishersApi";
import Skeleton from "react-loading-skeleton";
import SearchInput from "../../ui/SearchInput";
import { useDispatch } from "react-redux";
import { set } from "../../../features/articles";
import { useGetArticlesQuery } from "../../../services/articlesApi";
import { update } from "../../../features/publishers";
export default function Navigation() {
  const { data: publishers, isLoading } = useGetPublisherQuery();
  const dispatch = useDispatch();
  const [whichTab, setWhichTab] = useState();
  const { data: articles } = useGetArticlesQuery(whichTab);
  useEffect(() => {
    if (articles) {
      dispatch(set(articles));
      dispatch(update(whichTab));
    }
  }, [articles, dispatch, whichTab]);
  return (
    <div className="border-b-2 border-gray-900 py-3">
      <ul className="flex flex-wrap text-base justify-center md:justify-start space-x-6">
        {isLoading === true ? (
          Array(5)
            .fill()
            .map((value, index) => (
              <Skeleton key={`tab-skeleton-${index}`} width={100} />
            ))
        ) : (
          <>
            <li
              onClick={() => {
                setWhichTab("headlines");
                dispatch(set(articles));
              }}
              className={`text-md cursor-pointer ${!whichTab && "underline"}`}
            >
              All
            </li>
            {publishers?.sources.slice(0, 5).map((item) => (
              <li
                className={`text-md cursor-pointer ${
                  whichTab === item.id && "underline"
                }`}
                onClick={() => setWhichTab(item.id)}
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </>
        )}
        <li className="hidden md:block">
          <span className="block h-full w-0.5 bg-black" />
        </li>
        <li className="w-full md:w-auto">
          <SearchInput />
        </li>
      </ul>
    </div>
  );
}
