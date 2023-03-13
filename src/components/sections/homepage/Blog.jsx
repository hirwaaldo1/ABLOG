import Card from "../../ui/Card";

export default function Blog() {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array(10)
          .fill()
          .map((v, k) => {
            return <Card key={`article-list-${k}`} />;
          })}
      </div>
    </div>
  );
}
