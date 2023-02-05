import { FaTrademark } from "react-icons/fa";
import { CgCopyright } from "react-icons/cg";
import {
  BsGithub,
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import { FaInstalod } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full">
      {/* ==================== Footer Top Start here ================== */}
      <div className="w-full grid grid-cols-6 gap-16 py-16 border-b-[1px] border-b-zinc-800">
        <div className="col-span-2 flex flex-col">
          <p className="font-bold text-gray-200 text-3xl tracking-wider uppercase mb-4 relative">
            My Blog
            <span className="absolute top-1 font-normal text-xs text-center">
              <FaTrademark />
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            esse ad modi sint perferendis, excepturi corrupti illo id fuga
            eveniet aliquid veritatis facilis consequuntur eos magni beatae
            voluptatibus quas consequatur molestiae! Quo magni temporibus non.
          </p>
        </div>
      </div>
      {/* ==================== Footer Top End here ==================== */}
      {/* ==================== Footer Bottom Start here =============== */}
      <div className="flex justify-between items-center py-6">
        <div>
          <p className="text-xl font-medium text-gray-200">Social Media</p>
          <div className="flex items-center gap-4 mt-4">
            <BsGithub className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer" />
            <BsDribbble className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer" />
            <SiNextdotjs className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer" />
            <BsFacebook className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer" />
            <BsInstagram className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer" />
            <BsYoutube className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer" />
            <FaInstalod className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer" />
          </div>
        </div>
        <p className="flex items-center gap-.5 text-sm">
          <CgCopyright /> ReactBD_2023 All rights reserved
        </p>
      </div>
      {/* ==================== Footer Bottom End here ================= */}
    </div>
  );
};

export default Footer;
