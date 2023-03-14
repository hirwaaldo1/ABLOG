export default function Header() {
  return (
    <div className="flex justify-between items-center py-3 border-b-[3px] border-gray-900">
      <div className="flex cursor-pointer">
        <span className="text-2xl font-semibold">A</span>
        <span className="text-2xl font-normal">BlOG</span>
      </div>
      <div className="">
        <button className="bg-transparent border text-gray-900 border-gray-900 rounded-full pt-1.5 pb-2 px-4">
          Say Hi!
        </button>
      </div>
    </div>
  );
}
