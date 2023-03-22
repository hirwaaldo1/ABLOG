import { useState } from "react";
import { Search, X } from "react-feather";
import { useDispatch } from "react-redux";
import { searchHeadlines } from "../../features/headlines";

export default function SearchInput() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  function findArticle(event) {
    event.preventDefault();
    dispatch(searchHeadlines({ value: search }));
  }

  return (
    <form className="flex gap-2 items-center w-full" onSubmit={findArticle}>
      <Search size={17} />
      <input
        type="text"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
        className="outline-none placeholder:text-black"
        placeholder="Search..."
      />
      {search.length > 0 && (
        <div className="flex items-center gap-1">
          <button
            type="submit"
            className="block h-full text-sm bg-gray-800 text-white rounded-sm px-2 cursor-pointer"
          >
            find
          </button>
          <X
            size={16}
            className="bg-gray-300 bg-opacity-60 rounded-full p-0.5 cursor-pointer"
            onClick={() => setSearch("")}
          />
        </div>
      )}
    </form>
  );
}
