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
      } else {
        dispatch(setArticles(headlines));
      }
    });
  }

  return (
    <div className="flex gap-2 max-w-xl m-auto justify-between items-center bg-[#F4F4F5] p-2 rounded-sm">
      <Search size={17} color="#696A75" />
      <input
        type="text"
        onChange={onChangleText}
        value={search}
        className="outline-none bg-transparent placeholder:text-[#696A75] placeholder:font-medium w-full text-2xl "
        placeholder="Type any key word you want to search here..."
      />
      {search.length > 0 && (
        <div className="flex items-center gap-1">
          {loading ? (
            <Circle size={16} className="animate-spin p-0.5 cursor-pointer" />
          ) : (
            <X
              size={16}
              className="bg-transparent rounded-full p-0.5 cursor-pointer"
              onClick={(): void => {
                setSearch("");
                setKeyword(undefined);
                dispatch(setArticles(headlines));
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
