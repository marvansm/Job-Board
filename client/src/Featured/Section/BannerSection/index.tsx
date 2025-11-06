import {
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  ChevronDown,
  MapPin,
} from "lucide-react";
import ApiServices from "../../../Services/http";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../Constants/queryKeys";

const BannerSection = () => {
  const api = new ApiServices("http://localhost:1337/api/");
  const { data: locations } = useQuery({
    queryKey: [queryKeys.location],
    queryFn: () => api.getData("locations?populate=*"),
  });

  const { data: levels } = useQuery({
    queryKey: [queryKeys.level],
    queryFn: () => api.getData("levels?populate=*"),
  });

  const { data: departments } = useQuery({
    queryKey: [queryKeys.department],
    queryFn: () => api.getData("departments?populate=*"),
  });

  return (
    <section className="relative">
      <img
        src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/64b81629734341007a808e9d_home-v1-hero-bg-jobboardly-webflow-ecommerce-template.jpg"
        alt=""
        className="w-full h-[451px] object-cover"
      />

      <div className="absolute inset-0 container mx-auto max-w-[1130px] px-6 bottom-34 flex items-center">
        <div className="flex flex-col gap-4 items-start justify-center">
          <h2 className="text-[#376fff] text-[13px] font-bold leading-4 tracking-[1.04px] uppercase">
            Best tech jobs
          </h2>
          <h3 className="text-[36px] leading-12 font-semibold text-[#232535]">
            Find your perfect job <br /> in the tech industry
          </h3>
          <p className="text-[16px] text-[#484b62] font-normal leading-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>

          <ul className="flex gap-6 items-center">
            <li>
              <img
                className="w-[79px] object-contain"
                src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/6554fdc25133d9e05e8b9598_agency-logo-jobboardly-x-webflow-template.svg"
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[93px] object-contain"
                src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/6554fdc21156accfcc02b5ce_application-logo-jobboardly-x-webflow-template.svg"
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[93px] object-contain"
                src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/6554fdc266e7a7d51cee299d_business-logo-jobboardly-x-webflow-template.svg"
                alt=""
              />
            </li>
            <li>
              <img
                className="w-[93px] object-contain"
                src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/6554fdc267ffa27d36afed80_company-logo-jobboardly-x-webflow-template.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center transform translate-y-[-50px]  items-center h-[104px]  ">
        <div className="max-w-[1074px]  z-20 w-full">
          <form className="bg-white shadow-lg rounded-[5px] border border-gray-100 p-4 md:p-5 flex flex-wrap md:flex-nowrap items-center justify-between gap-3 h-[104px]">
            <div className="flex items-center gap-2 flex-1 max-w-[346px] h-[38px] border border-gray-200 rounded-lg px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for jobs"
                className="flex-1 outline-none text-sm text-gray-600"
              />
              <button
                type="submit"
                className="bg-[#376fff] text-white px-3 py-1 text-[14px] rounded-sm hover:scale-[1.03] transition-all duration-500 font-semibold hover:brightness-95"
              >
                Search
              </button>
            </div>
            <div className="flex gap-3">
              <div className="relative group">
                <div className="border border-gray-200 rounded-lg px-3 w-[202px] h-[38px] hover:text-blue-400 hover:border-black gap-1 flex items-center text-sm text-gray-600 cursor-pointer bg-white">
                  <MapPin size={12} />
                  <span>Location</span>
                  <ChevronDown
                    size={16}
                    className="ml-auto translate-y-0.5 transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>

                <ul className="absolute left-0 top-[42px] w-[202px] text-[16px] font-medium bg-white border border-gray-200 rounded-lg shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-30">
                  {locations?.data?.map((item: any) => (
                    <li
                      key={item?.id}
                      className="px-3 py-3  text-gray-600 hover:bg-gray-100 cursor-pointer"
                    >
                      {item?.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative group">
                <div className="border border-gray-200 rounded-lg px-3 w-[202px] hover:border-black hover:text-blue-400 h-[38px] gap-1 flex items-center  text-sm text-gray-600 cursor-pointer bg-white">
                  <ChartNoAxesColumnIncreasing size={12} />
                  <span>Job level</span>
                  <ChevronDown
                    size={16}
                    className="ml-auto translate-y-0.5 transition-transform duration-300 group-hover:rotate-180 "
                  />
                </div>
                <ul className="absolute left-0 top-[42px] w-[202px] font-medium text-[16px] bg-white border border-gray-200 rounded-lg shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-30">
                  {levels?.data?.map((item: any) => (
                    <li
                      key={item?.id}
                      className="px-3 py-3  text-gray-600 hover:bg-gray-100 cursor-pointer"
                    >
                      {item?.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative group">
                <div className="border border-gray-200 rounded-lg px-3 w-[202px] h-[38px] hover:text-blue-400 hover:border-black gap-1 flex items-center  text-sm text-gray-600 cursor-pointer bg-white">
                  <BriefcaseBusiness size={12} />
                  <span>Department</span>
                  <ChevronDown
                    size={16}
                    className="ml-auto translate-y-0.5 transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>
                <ul className="absolute left-0 top-[42px] font-medium w-[202px] text-[16px] bg-white border border-gray-200 rounded-lg shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-30">
                  {departments?.data?.map((item: any) => (
                    <li
                      key={item?.id}
                      className="px-3 py-3  text-gray-600 hover:bg-gray-100 cursor-pointer"
                    >
                      {item?.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
