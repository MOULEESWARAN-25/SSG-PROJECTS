import Futuristic from "../assets/image.png";
import { HR } from "flowbite-react";
import { Rating } from "flowbite-react";
export default function Home() {
  return (
    <div className="pl-20 grid mt-32 lg:grid-cols-2">
      <div className="grid gap-8  ">
        <h1 className="text-5xl font-medium">Put people first</h1>
        <p className="w-[330px] lg:w-[350px">
          Fast, user-friendly and engaging - turn HR into people and culture and
          streamline your daily operations with your own branded app.
        </p>
        <div class="w-[300px]">
          <div class="relative">
            <input
              type="search"
              id="default-search"
              class="w-full h-12 text-sm text-black border border-gray-400 rounded-lg items-center p-5"
              placeholder="Enter work email"
              required
            />
            <button
              type="submit"
              class="absolute top-1.5 end-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
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
          <div className="flex items-center">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <div className="relative w-5 h-5">
                <Rating.Star className="text-gray-300" /> {/* Empty Star */}
                <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
                  <Rating.Star className="text-yellow-400" />{" "}
                  {/* Half-Filled Star */}
                </div>
              </div>
            </Rating>
            <p className="ml-2 text-sm font-medium text-black">4.5</p>
            <p className="ml-2 text-sm font-medium text-gray-500">Average user rating</p>
          </div>
        </div>
      </div>
      <img src={Futuristic} className=" w-max h-full mr-12" />
    </div>
  );
}
