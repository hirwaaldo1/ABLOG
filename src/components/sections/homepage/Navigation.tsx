import { useState } from "react";
import { useGetPublisherQuery } from "../../../services/publishersApi";
import Slider from "react-slick";
import settings from "../../../config/reactSlickSetting";
import { Link } from "react-router-dom";
import NavSkeleton from "./NavSkeleton";
import { Publisher } from "interfaces/publisher";

export default function Navigation(): React.ReactElement {
  const { data: publishers, isLoading } = useGetPublisherQuery(undefined);
  const [whichTab, setWhichTab] = useState<string>("");

  return (
    <div className=" border-gray-900 py-3">
      <div className="flex flex-wrap text-base justify-center md:justify-start space-x-6">
        {isLoading === true ? (
          <div className="mx-auto flex gap-3">
            <NavSkeleton count={11} />
          </div>
        ) : (
          <Slider {...settings} className="w-11/12 md:w-full- mx-6 md:mx-auto">
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
      </div>
    </div>
  );
}
