import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function Header(): ReactElement {
  return (
    <div className="flex justify-between items-center py-3 border-b-[3px] border-gray-900">
      <Link className="flex cursor-pointer" to="/">
        <span className="text-2xl font-semibold">A</span>
        <span className="text-2xl font-normal">BlOG</span>
      </Link>
      <div className="">
        <Link
          to="https://www.hirwaaldo.com/#Contact"
          target="_blank"
          rel="noreferrer"
          className="bg-transparent border text-gray-900 border-gray-900 rounded-full pt-1.5 pb-2 px-4"
        >
          Say Hi!
        </Link>
      </div>
    </div>
  );
}
