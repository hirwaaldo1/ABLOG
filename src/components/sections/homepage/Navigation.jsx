import { Search } from "react-feather";
export default function Navigation() {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto">
      <div className="border-b-2 border-gray-900 py-3">
        <ul className="flex flex-wrap justify-center md:justify-start space-x-6">
          {[
            "All",
            "Web Development",
            "UI/UX Design",
            "Photography",
            "Travel",
          ].map((item, index) => (
            <li
              className="text-md hover:underline cursor-pointer"
              key={`nagivition-tab-${index}`}
            >
              {item}
            </li>
          ))}
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
    </div>
  );
}
