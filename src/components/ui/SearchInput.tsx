import { ChangeEvent, useState } from "react";
import { Search, X } from "react-feather";
import { useDispatch } from "react-redux";
import { setArticles } from "../../features/articles";
import { useSearchArticlesQuery } from "../../services/articlesApi";

export default function SearchInput(): React.ReactElement {
  const [search, setSearch] = useState("");
  const { data: article } = useSearchArticlesQuery(search);
  const dispatch = useDispatch();

  function searchArticle(event) {
    event.preventDefault();
    dispatch(setArticles(article));
  }

  return (
    <form className="flex gap-2 items-center w-full" onSubmit={searchArticle}>
      <Search size={17} />
      <input
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearch(event.target.value)
        }
        value={search}
        className="outline-none placeholder:text-black"
        placeholder="Search..."
      />
      {search.length > 0 && (
        <div className="flex items-center gap-1">
          <button className="block h-full text-sm bg-gray-800 text-white rounded-sm px-2 cursor-pointer">
            find
          </button>
          <X
            size={16}
            className="bg-gray-300 bg-opacity-60 rounded-full p-0.5 cursor-pointer"
            onClick={(): void => setSearch("")}
          />
        </div>
      )}
    </form>
  );
}
