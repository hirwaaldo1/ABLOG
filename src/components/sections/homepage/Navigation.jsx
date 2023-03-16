import { useEffect, useState } from "react";
import { useGetPublisherQuery } from "../../../services/publishersApi";
import Skeleton from "react-loading-skeleton";
import SearchInput from "../../ui/SearchInput";
import { useDispatch } from "react-redux";
import { set } from "../../../features/articles";
import { useGetArticlesQuery } from "../../../services/articlesApi";
import Slider from "react-slick";
import settings from "../../../config/reactSlickSetting";
export default function Navigation() {
  const { data: publishers, isLoading } = useGetPublisherQuery();
  const dispatch = useDispatch();
  const [whichTab, setWhichTab] = useState("headlines");
  const { data: articles } = useGetArticlesQuery(whichTab);
  useEffect(() => {
    if (articles) {
      dispatch(set(articles));
    }
  }, [articles, dispatch, whichTab]);

  return (
    <div className="border-b-2 border-gray-900 py-3">
      <div className="flex flex-wrap text-base justify-center md:justify-start space-x-6">
        {isLoading === true ? (
          Array(5)
            .fill()
            .map((value, index) => (
              <Skeleton key={`tab-skeleton-${index}`} width={100} />
            ))
        ) : (
          <Slider {...settings} className="w-11/12 md:w-1/2 mx-6">
            <div
              onClick={() => {
                setWhichTab("headlines");
                dispatch(set(articles));
              }}
              className={`text-md cursor-pointer mr-4 ${
                !whichTab && "underline"
              }`}
            >
              All
            </div>
            {publishers?.sources.map((item) => (
              <div
                className={`text-md cursor-pointer mr-4 ${
                  whichTab === item.id && "underline"
                }`}
                onClick={() => setWhichTab(item.id)}
                key={item.id}
              >
                {item.name}
              </div>
            ))}
          </Slider>
        )}
        <div className="hidden md:block">
          <span className="block h-full w-0.5 bg-black" />
        </div>
        <div className="w-full md:w-auto">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
