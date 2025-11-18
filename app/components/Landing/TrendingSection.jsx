"use client";
import Image from "next/image";
import { moviesCollection } from "../../utils/constants";
import { Poppins } from "next/font/google";

const poppinsClass = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const TrendingSection = () => {
  return (
    <div className="bg-black w-full h-auto py-8">
      <div className="p-4">
        <h4 className="text-white text-2xl">Trending Now</h4>
      </div>

      <div className="flex justify-start items-center flex-wrap gap-y-3">
        {moviesCollection.map((item, _) => (
          <div className="w-[200px] overflow-hidden rounded-md mx-2" key={_}>
            {console.log("item---->", `/${item.path}`)}
            <Image
              src={`/${item.path}`}
              alt=""
              className="w-full h-52"
              width={250}
              height={100}
            />
            <div className="bg-white h-14 p-4 font-semibold">
              <p className={`${poppinsClass.className} text-center`}>
                {item.movieName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
