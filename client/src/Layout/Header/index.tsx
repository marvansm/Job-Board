import { BriefcaseBusiness, ChevronDown, Lock } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-999 container mx-auto max-w-[1130px] px-6 py-6">
      <nav className="grid grid-cols-12 items-center   justify-between ">
        <div className="col-span-3">
          <div className="flex items-center">
            <img
              src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/6499f8accd5a665370c31806_logo-web-jobboardly-x-webflow-template.svg"
              alt="logo"
              className="max-w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="col-span-9 flex items-center justify-end gap-8">
          <ul className="flex items-center gap-6 text-[#232535] text-[14px] font-medium leading-5 font-inter">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer flex items-center gap-0.5">
              Pages
              <ChevronDown size={18} />
            </li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Cart (0)</li>
          </ul>

          <div className="flex items-end justify-end gap-4">
            <button className="flex items-center gap-2 p-2 border border-[#E2E8F0] text-14px font-medium rounded-lg hover:scale-[1.05] transition-all duration-500 shadow-2xs bg-[#F8F8FA]">
              <Lock size={14} /> Login
            </button>
            <button className="flex items-center gap-2  p-2 text-[14px] font-medium bg-[#4767FF] border border-[#4767FF] rounded-lg hover:scale-[1.05] transition-all duration-500 shadow-2xs text-white">
              <BriefcaseBusiness size={14} /> Post a job
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
