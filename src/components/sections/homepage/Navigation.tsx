import { useState } from "react";
import { useGetPublisherQuery } from "../../../services/publishersApi";
import SearchInput from "../../ui/SearchInput";
import Slider from "react-slick";
import settings from "../../../config/reactSlickSetting";
import { Link } from "react-router-dom";
import NavSkeleton from "./NavSkeleton";
import { Publisher } from "interfaces/publisher";

export default function Navigation(): React.ReactElement {
  const { data: publishers, isLoading } = useGetPublisherQuery(undefined);
  const [whichTab, setWhichTab] = useState<string>("");

  return (
    <div className="border-b-2 border-gray-900 py-3">
      <div className="flex flex-wrap text-base justify-center md:justify-start space-x-6">
        {isLoading === true ? (
          <NavSkeleton count={5} />
        ) : (
          <Slider {...settings} className="w-11/12 md:w-1/2 mx-6">
            {publishers?.sources.map((item: Publisher) => (
              <Link
                to={`/:${item.name}/article`}
                state={{ whichTab: item.id }}
                className={`text-md cursor-pointer mr-4 ${
                  whichTab === item.id && "underline"
                }`}
                onClick={() => setWhichTab(item.id)}
                key={item.id}
              >
                {item.name}
              </Link>
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
