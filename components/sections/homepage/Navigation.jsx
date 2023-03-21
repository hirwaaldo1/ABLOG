import { useState } from "react";
import SearchInput from "../../ui/SearchInput";
import Slider from "react-slick";
import settings from "../../../config/reactSlickSetting";
import { useSelector } from "react-redux";
import Link from "next/link";
import NavSkeleton from "./NavSkeleton";

export default function Navigation() {
  const navigationTab = useSelector((state) => state.publishers);
  const [whichTab, setWhichTab] = useState("");

  return (
    <div className="border-b-2 border-gray-900 py-3">
      <div className="flex flex-wrap text-base justify-center md:justify-start space-x-6">
        {navigationTab.isLoading ? (
          <NavSkeleton count={5} />
        ) : (
          <Slider {...settings} className="w-11/12 md:w-1/2 mx-6">
            {navigationTab.value?.map((item) => (
              <Link
                href={`/news/${item.id}`}
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
        {navigationTab.isError && <p>Opps.. something went wrong</p>}
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
