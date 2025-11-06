import { useQuery } from "@tanstack/react-query";
import ApiServices from "../../../Services/http";
import VacanciesCard from "../../Common/VacanciesCard";
import { queryKeys } from "../../../Constants/queryKeys";

const LatestVacanciesSection = () => {
  const api = new ApiServices("http://localhost:1337/api/");

  const { data } = useQuery({
    queryKey: [queryKeys.LatesVacancy],
    queryFn: () =>
      api.getData(
        "vacancies?populate[companies][populate]=logo&populate[locations]=true&populate[level]=true&populate[department]=true"
      ),
  });
  return (
    <div className="container max-w-[1130px] px-6 mx-auto mt-[81px] pb-[100px]">
      <div className=" flex items-center justify-center flex-col ">
        <div className="grid grid-cols-1 gap-4">
          <h2 className=" text-[#232535] text-[18px] font-semibold leading-[1.333em]">
            Latest jobs
          </h2>
          {data?.data?.map((item: any) => (
            <VacanciesCard
              key={item?.id}
              logo={`http://localhost:1337${item?.companies[0]?.logo?.url}`}
              title={item?.name}
              company={item?.companies[0]?.name}
              location={item?.locations[0]?.name}
              level={item?.level?.name}
              department={item?.department?.name}
            />
          ))}
        </div>
        <div className="mt-9 flex items-center gap-[30px]">
          <span className="text-[16px] text-[#484b62] font-normal leading-[26px]">
            1 / 2
          </span>
          <button className="rounded-sm py-2 px-3 text-[14px] leading-[17.99px] border border-[#376fff] bg-[#376fff] text-white font-semibold">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestVacanciesSection;
