import { useState } from "react";
import { Search } from "react-feather";
import { useGetPublisherQuery } from "../../../services/publishersApi";
import Skeleton from "react-loading-skeleton";
export default function Navigation() {
  const { data: publishers, isLoading } = useGetPublisherQuery();
  const [whichTab, setWhichTab] = useState("all");
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
              className={`text-md cursor-pointer ${
                whichTab === "all" && "underline"
              }`}
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
        <li className="flex gap-2 items-center w-full md:w-auto">
          <Search size={17} />
          <input
            type="text"
            className="outline-none placeholder:text-black"
            placeholder="Search..."
          />
        </li>
      </ul>
    </div>
  );
}
