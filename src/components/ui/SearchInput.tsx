import { ChangeEvent, useEffect, useState } from "react";
import { Search, X, Circle } from "react-feather";
import { useDispatch } from "react-redux";
import { setArticles } from "../../features/articles";
import {
  useGetArticlesQuery,
  useSearchArticlesQuery,
} from "../../services/articlesApi";

export default function SearchInput(): React.ReactElement {
  const [search, setSearch] = useState<string>("");
  const [keyword, setKeyword] = useState<string | undefined>();
  const { data: article } = useSearchArticlesQuery(keyword);
  const { data: headlines } = useGetArticlesQuery("headlines");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (keyword) {
      dispatch(setArticles(article));
    }
  }, [article, dispatch, keyword]);

  const debounce = (cb: Function) => {
    let timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb();
    }, 1000);
  };
  function onChangleText(event: ChangeEvent<HTMLInputElement>): void {
    setLoading(true);
    setSearch(event.target.value);
    debounce(() => {
      if (event.target.value.length > 0) {
        setLoading(false);
        setKeyword(event.target.value);
      }
    });
  }

  return (
    <form className="flex gap-2 items-center w-full">
      <Search size={17} />
      <input
        type="text"
        onChange={onChangleText}
        value={search}
        className="outline-none placeholder:text-black"
        placeholder="Search..."
      />
      {search.length > 0 && (
        <div className="flex items-center gap-1">
          {loading ? (
            <Circle size={16} className="animate-spin p-0.5 cursor-pointer" />
          ) : (
            <X
              size={16}
              className="bg-gray-300 bg-opacity-60 rounded-full p-0.5 cursor-pointer"
              onClick={(): void => {
                setSearch("");
                setKeyword(undefined);
                dispatch(setArticles(headlines));
              }}
            />
          )}
        </div>
      )}
    </form>
  );
}
