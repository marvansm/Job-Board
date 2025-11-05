import { ArrowUpRight } from "lucide-react";

const CompaniesCard = () => {
  return (
    <div className="flex items-center gap-4 p-5 border border-[#eaebf3] hover:border-[#376fff] duration-200 cursor-pointer bg-white rounded-md">
      <div className="max-w-14">
        <img
          src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/649bb5a3d4427b2d598f3870_facebook-logo-icon-jobboardly-x-webflow-template.svg"
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div>
        <h2 className="text-[18px] font-semibold text-[#232535] leading-[23.994px]">
          Facebook
        </h2>
        <button className="flex items-center leading-5 text-[#232535]">
          Learn More <ArrowUpRight strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};

export default CompaniesCard;
