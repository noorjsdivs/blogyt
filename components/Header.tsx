import { FiUser } from "react-icons/fi";
import { FaShoppingCart, FaTrademark } from "react-icons/fa";
const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between border-b-[1px] border-b-zinc-600 sticky top-0 z-50 bg-bodyColor">
      {/* =============== Left Start =============== */}
      <div className="flex items-center gap-8">
        <div className="w-12 h-6 overflow-hidden cursor-pointer font-semibold text-gray-100 uppercase relative group">
          <span className="absolute text-gray-100 left-0 -translate-y-0 top-0 group-hover:translate-y-5 transition-transform duration-300">
            Home
          </span>
          <span className="absolute text-textDesignColor left-0 -translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
            Home
          </span>
        </div>
        <div className="w-16 h-6 overflow-hidden cursor-pointer font-semibold text-gray-100 uppercase relative group">
          <span className="absolute text-gray-100 left-0 -translate-y-0 top-0 group-hover:translate-y-5 transition-transform duration-300">
            Pricing
          </span>
          <span className="absolute text-textDesignColor left-0 -translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
            Pricing
          </span>
        </div>
        <div className="w-16 h-6 overflow-hidden cursor-pointer font-semibold text-gray-100 uppercase relative group">
          <span className="absolute text-gray-100 left-0 -translate-y-0 top-0 group-hover:translate-y-5 transition-transform duration-300">
            Services
          </span>
          <span className="absolute text-textDesignColor left-0 -translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
            Services
          </span>
        </div>
      </div>
      {/* =============== Left End ================= */}
      {/* =============== Middle Start ============= */}
      <div>
        <p className="font-bold text-gray-100 text-3xl tracking-wider uppercase relative">
          My Blog
          <span className="absolute top-1 -right-2.5 font-normal text-xs text-center">
            <FaTrademark />
          </span>
        </p>
      </div>
      {/* =============== Middle End =============== */}
      {/* =============== Right Start ============== */}
      <div>
        <div className="flex items-center gap-8">
          <div className="w-12 h-6 overflow-hidden cursor-pointer font-semibold text-gray-100 uppercase relative group">
            <span className="absolute text-gray-100 left-0 -translate-y-0 top-0 group-hover:translate-y-5 transition-transform duration-300">
              Shop
            </span>
            <span className="absolute text-textDesignColor left-0 -translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
              Shop
            </span>
          </div>
          <div className="w-12 h-6 overflow-hidden cursor-pointer font-semibold text-gray-100 uppercase relative group">
            <span className="absolute text-gray-100 left-0 -translate-y-0 top-0 group-hover:translate-y-5 transition-transform duration-300">
              Work
            </span>
            <span className="absolute text-textDesignColor left-0 -translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
              Work
            </span>
          </div>
          <div className="w-16 h-6 overflow-hidden cursor-pointer font-semibold text-gray-100 uppercase relative group">
            <span className="absolute text-gray-100 left-0 -translate-y-0 top-0 group-hover:translate-y-5 transition-transform duration-300">
              About
            </span>
            <span className="absolute text-textDesignColor left-0 -translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
              About
            </span>
          </div>
          <div>
            <FiUser className="text-xl text-white hover:text-textDesignColor cursor-pointer duration-300" />
          </div>
          <div className="relative">
            <FaShoppingCart className="text-xl text-gray-100 hover:text-textDesignColor cursor-pointer duration-300" />
            <span className="absolute -top-2 -right-1 text-xs w-3.5 h-3.5 rounded-full bg-textDesignColor text-black flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
      {/* =============== Right End ================ */}
    </header>
  );
};

export default Header;
