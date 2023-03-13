export default function Card() {
  return (
    <div className="cursor-pointer group">
      <img
        src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
        className="w-full h-44 object-cover rounded-sm"
        alt=""
      />
      <div className="flex gap-2 items-center text-gray-500 text-sm font-light mt-4 mb-2">
        <span>Feb 12</span>
        <span className="block w-1 h-1 rounded-full bg-gray-700" />
        <span>10 min</span>
      </div>
      <h5 className="text-lg font-bold leading-6 group-hover:text-gray-700">
        14 Actionable Steps to Monetize Your Website
      </h5>
    </div>
  );
}
