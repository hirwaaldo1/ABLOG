import Input from "components/ui/SearchInput";

export default function Search(): React.ReactElement {
  return (
    <section
      id="#search"
      className="max-w-2xl mx-auto rounded-sm overflow-hidden py-5"
    >
      <div className="text-center py-8 flex flex-col justify-center items-center gap-2">
        <p className="text-[#696A75] text-xs font-medium">Search Bar</p>
        <div className="w-full">
          <Input />
        </div>
        <p className="text-[#696A75] text-sm font-normal">
          Search for news articles by mention a specific topic or keyword
        </p>
      </div>
    </section>
  );
}
