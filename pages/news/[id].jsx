import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft } from "react-feather";
import { useDispatch } from "react-redux";
import Blog from "../../components/sections/Blog";
import { setArticles } from "../../features/articles";
import { articlesApi } from "../../services/articlesApi";

export default function Articles({ blogList }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setArticles({
        value: blogList.articles,
        isError: blogList.status === "ok" ? false : true,
        isLoading: false,
      })
    );
  }, [dispatch, blogList]);
  return (
    <div>
      <Link href={"/"} className="my-3 flex items-center gap-5">
        <ArrowLeft className="bg-gray-100 rounded-full" />
        <span>Back</span>
      </Link>
      <Blog />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const articles = await articlesApi(id);
  return {
    props: {
      blogList: articles,
    },
  };
}
