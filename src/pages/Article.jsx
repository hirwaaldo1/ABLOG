export default function Article() {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto">
      <div className="grid md:grid-cols-3 gap-10 md:gap-20 my-12">
        <div className="flex flex-col gap-8 my-auto">
          <h1 className="text-5xl font-bold">
            How to Start a Blog in 2021: The Ultimate Guide
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut,
            consequatur, cupiditate sit iusto reprehenderit odit ut animi natus
            corrupti eius impedit non quod rerum ex ullam fugiat officia. Non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut,
            consequatur, cupiditate sit iusto reprehenderit odit ut animi natus
            corrupti eius impedit non quod rerum ex ullam fugiat officia. Non.
          </p>
          <div className="flex justify-between">
            <p className="font-bold">barrons.com</p>
            <div className="flex gap-2 items-center text-gray-500 text-base font-light">
              <span>Feb 12</span>
              <span className="block w-1 h-1 rounded-full bg-gray-700" />
              <span>10 min</span>
            </div>
          </div>
          <button className="bg-green-500 py-3 px-12 rounded-sm text-white w-fit">
            Read More
          </button>
        </div>
        <div className="md:col-span-2">
          <img
            src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
            className="w-full object-cover rounded-sm"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
