import { useQuery } from "@tanstack/react-query";
import ApiServices from "../../../../Services/http";
import CompaniesCard from "../../../Components/CompaniesCard";
import { queryKeys } from "../../../../Constants/queryKeys";

const CompaniesSection = () => {
  const api = new ApiServices("http://localhost:1337/api/");
  const { data } = useQuery({
    queryKey: [queryKeys.company],
    queryFn: () => api.getData("companies?populate=*"),
  });

  return (
    <div className="bg-[#faf9fc] py-[100px]">
      <div className="container max-w-[1130px] px-6 mx-auto">
        <div className="heading flex items-end justify-between mb-6">
          <div>
            <h2 className="text-[32px] text-[#232535] font-semibold leading-[41.984px] mb-2">
              Featured companies
            </h2>
            <p className="text-[#484b62] text-[16px] font-normal leading-[26px] opacity-[.8]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="rounded-sm px-3 py-2 text-[14px] leading-[17.99px] border border-[#eaebf3] shadow-sm font-medium hover:scale-[1.01] duration-200 cursor-pointer">
            See all companies
          </button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {data?.data?.map((item: any) => (
            <CompaniesCard
              key={item?.id}
              logo={`http://localhost:1337${item?.logo?.url}`}
              name={item?.name}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 pt-[100px] pb-2.5">
          <div className="border border-[#514fc0] p-12 bg-[#514fc0] rounded-md ">
            <h2 className="mb-1 text-[22px] text-white font-semibold leading-[31.988px]">
              Post a featured job
            </h2>
            <p className="opacity-[.8] text-white mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit tincidunt
              sit venenatis, vulputate tristique fringilla ut.
            </p>
            <button className="rounded-sm px-3 py-2 text-[14px] leading-[17.99px] bg-white border border-[#eaebf3] shadow-sm font-medium hover:scale-[1.01] duration-200 cursor-pointer">
              See all companies
            </button>
          </div>
          <div className="border border-[#F2F2F7] p-12 bg-[#F2F2F7] rounded-md">
            <h2 className="mb-1 text-[22px] text-black font-semibold leading-[31.988px]">
              Post a free job
            </h2>
            <p className="opacity-[.8] text-[#484b62] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit tincidunt
              sit venenatis, vulputate tristique fringilla ut.
            </p>
            <button className="rounded-sm px-3 py-2 text-[14px] leading-[17.99px] bg-white border border-[#eaebf3] shadow-sm font-medium hover:scale-[1.01] duration-200 cursor-pointer">
              Post a free job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesSection;
