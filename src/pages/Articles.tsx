import { ArrowLeft } from "react-feather";
import { Link, Location, useLocation } from "react-router-dom";
import Blog from "../components/sections/articlespage/Blog";

export default function Articles(): React.ReactElement {
  const { state }: Location = useLocation();
  return (
    <div>
      <Link to={"/"} className="my-3 flex items-center gap-5">
        <ArrowLeft className="bg-gray-100 rounded-full" />
        <span>Back</span>
      </Link>
      <Blog whichTab={state.whichTab} />
    </div>
  );
}
