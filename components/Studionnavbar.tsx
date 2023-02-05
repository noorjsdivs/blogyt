import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Studionnavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#ECDEC5] flex just items-center px-4">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-[#ECDEC5]" />
          Go To Homepage
        </Link>
        <div className="hidden md:flex gap-1 p-3 rounded-lg justify-center border-2 border-[#ECDEC5]">
          <h1 className="text-gray-100">Want to learn more visit My:</h1>
          <Link
            href="https://www.youtube.com/@reactjsBD"
            target="_blank"
            className="text-[#ECDEC5] font-semibold"
          >
            Youtube Channel
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default Studionnavbar;
