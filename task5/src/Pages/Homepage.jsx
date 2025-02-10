import Futuristic from "../assets/image.png";
import { HR } from "flowbite-react";
import { Rating } from "flowbite-react";
export default function Home() {
  return (
    <div className="flex justify-between mt-32">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-medium">Put people first</h1>
        <p className="w-[330px]">
          Fast, user-friendly and engaging - turn HR into people and culture and
          streamline your daily operations with your own branded app.
        </p>
        <div class="w-[300px]">
          <div class="relative">
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 text-sm text-black border border-gray-400 rounded-lg"
              placeholder="Enter work email"
              required
            />
            <button
              type="submit"
              class="absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Book a demo
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex gap-14 items-center">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-medium">75.2%</h1>
                <h1>Average daily activity</h1>
              </div>
              <div className="border-l-2 border-gray-200 h-[120px]"></div>
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-medium">~20k</h1>
                <h1>Average daily activity</h1>
              </div>
            </div>
            <HR />
          </div>
          <div className="flex gap-5">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <p className="ml-2 text-sm font-medium tex-black">4.5</p>
            </Rating>
            <p className="text-gray-400">Average user rating</p>
          </div>
        </div>
      </div>
      <img src={Futuristic} className=" w-max h-full mr-12" />
    </div>
  );
}
