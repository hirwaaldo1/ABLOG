import { useState } from "react";
import { Search, X } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { find } from "../../features/articles";
import { useGetArticlesQuery } from "../../services/articlesApi";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const whichTab = useSelector((state) => state.publishers);
  const { data } = useGetArticlesQuery(whichTab);
  const dispatch = useDispatch();
  function searchArticle(event) {
    event.preventDefault();
    dispatch(find({ keyword: search, oldData: data }));
  }
  return (
    <form className="flex gap-2 items-center w-full" onSubmit={searchArticle}>
      <Search size={17} />
      <input
        type="text"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
        className="outline-none placeholder:text-black"
        placeholder="Search..."
      />
      {search.length > 0 && (
        <X
          size={16}
          className="bg-gray-300 bg-opacity-60 rounded-full p-0.5 cursor-pointer"
          onClick={() => setSearch("")}
        />
      )}
    </form>
  );
}
