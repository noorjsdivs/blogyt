import Image from "next/image";
import { starIcon } from "../public/assets/index";
const Banner = () => {
  return (
    <div className="flex flex-col gap-16 items-center py-28">
      <p className="text-3xl text-gray-100 font-titleFont">Writing Blog</p>
      <div className="flex flex-col items-center gap-4 text-7xl font-medium text-gray-50">
        <div className="relative">
          <h1>WE'VE GOT</h1>
          <Image
            src={starIcon}
            className="w-16 absolute -top-6 -right-10 animate-spin-slow"
            alt="bannerIocn"
          />
        </div>
        <h1>
          <span className="font-titleFont">exciting insight </span>FOR YOU
        </h1>
      </div>
    </div>
  );
};

export default Banner;
