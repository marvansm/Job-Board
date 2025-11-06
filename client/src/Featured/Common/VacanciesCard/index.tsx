import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  MapPin,
} from "lucide-react";
import type { vacanciesCardProps } from "../../../Types/global";

const VacanciesCard = ({
  logo,
  company,
  title,
  location,
  level,
  department,
}: vacanciesCardProps) => {
  return (
    <div className="flex items-center gap-5 py-2 pl-2 pr-5 border border-[#376fff] rounded-md group w-[570px] transform hover:scale-[1.01] cursor-pointer duration-200">
      <div className="bg-[#F4F9FF] rounded-md min-w-[126px] max-w-[126px] max-h-[126px] min-h-[126px] px-2.5 flex items-center justify-center">
        <img
          src={logo}
          alt=""
          className="rounded-md max-w-full h-full object-cover"
        />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-[#a0a2b3] tracking-[.06em] text-[12px] font-semibold leading-[15px] mb-2">
            {company}
          </h2>
          <button className="border border-[#eaebf3] rounded-sm min-h-[30px] max-h-[30px] max-w-[30px] min-w-[30px] flex items-center justify-center">
            <ArrowUpRight size={18} color="#a0a2b3" />
          </button>
        </div>
        <h3 className="text-[#232535] mb-4 font-semibold leading-[1.333em] text-[18px] group-hover:text-[#376FFF] duration-300 cursor-pointer">
          {title}
        </h3>
        <div className="flex items-center gap-2.5">
          <button className="flex items-center rounded-md px-2 py-1.5 text-[12px] text-[#232535] leading-[18px] gap-1.5 border border-[#eaebf3]">
            <MapPin size={11} color="#376fff" /> {location}
          </button>
          <button className="flex items-center rounded-md px-2 py-1.5 text-[12px] text-[#232535] leading-[18px] gap-1.5 border border-[#eaebf3]">
            <ChartNoAxesColumnIncreasing size={11} color="#376fff" /> {level}
          </button>
          <button className="flex items-center rounded-md px-2 py-1.5 text-[12px] text-[#232535] leading-[18px] gap-1.5 border border-[#eaebf3]">
            <BriefcaseBusiness size={11} color="#376fff" /> {department}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VacanciesCard;
