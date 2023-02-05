import Image from "next/image";
import { TbArrowDownRight } from "react-icons/tb";
import { enquiry1, enquiry2, enquiry3, starIcon } from "../public/assets/index";

const Enquiry = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center">
      <h3 className="text-2xl">Looking to get more Freebies?</h3>
      <div className="py-10 w-full flex justify-center group">
        <div className="py-10 w-[500px] flex items-center justify-center relative">
          <Image
            className="absolute -left-20 top-14 group-hover:-left-[280px] group-hover:rotate-25 w-96 duration-500"
            src={enquiry1}
            alt="enquiry1"
          />
          <Image className="z-10 w-96" src={enquiry2} alt="enquiry2" />
          <Image
            className="absolute -right-20 group-hover:-right-[294px] top-14 group-hover:rotate-13 w-96 duration-500"
            src={enquiry3}
            alt="enquiry3"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 text-4xl font-medium text-gray-50">
        <div className="relative">
          <h1>LOOKING TO GET MORE GIFT?</h1>
          <Image
            className="w-16 absolute -top-6 -right-10 animate-spin-slow"
            src={starIcon}
            alt="startIcon"
          />
        </div>
        <h1>
          GET MORE CANVA <span className="font-titleFont">free templates</span>
          FROM US
        </h1>
      </div>
      <button className="w-52 h-12 font-medium text-xl uppercase bg-transparent flex items-center justify-center gap-1 hover:bg-textDesignColor hover:text-black mt-6 border rounded-full group">
        Click here
        <div className="w-5 h-5 relative overflow-hidden">
          <span>
            <TbArrowDownRight className="text-2xl -mt-[1px] absolute top-0 -translate-x-5 -translate-y-5 text-black group-hover:translate-x-0 group-hover:translate-y-0 duration-300" />
          </span>
          <span>
            <TbArrowDownRight className="text-2xl -mt-[1px] absolute top-0 translate-x-0 translate-y-0 text-white group-hover:translate-x-5 group-hover:translate-y-5 duration-300" />
          </span>
        </div>
      </button>
    </div>
  );
};

export default Enquiry;
