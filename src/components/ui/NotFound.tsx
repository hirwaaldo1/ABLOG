export default function NotFound(): React.ReactElement {
  return (
    <div className="flex justify-center items-center flex-col h-[80svh] w-full">
      <div className="flex w-72 h-72 justify-center bg-[#EEF0F4] items-center rounded-full">
        <img
          src="/assets/empty-folder.svg"
          className="w-40 h-40"
          alt="Not Found"
        />
      </div>
      <h1 className="text-3xl font-light text-center mt-6 mb-2">
        No results found
      </h1>
      <p className="text-[#747B7D] text-base font-light">
        Try adjusting your search or filter to find what you're looking for.
      </p>
    </div>
  );
}
