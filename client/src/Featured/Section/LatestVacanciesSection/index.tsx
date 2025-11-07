import { useQuery } from "@tanstack/react-query";
import ApiServices from "../../../Services/http";
import VacanciesCard from "../../Components/VacanciesCard";
import { queryKeys } from "../../../Constants/queryKeys";
import { useState } from "react";

const LatestVacanciesSection = ({ filters }: any) => {
  const api = new ApiServices("http://localhost:1337/api/");
  const [page, setPage] = useState(1);

  const buildFilters = () => {
    const params = [];
    if (filters.location)
      params.push(`filters[locations][name][$eq]=${filters.location}`);
    if (filters.level)
      params.push(`filters[level][name][$eq]=${filters.level}`);
    if (filters.department)
      params.push(`filters[department][name][$eq]=${filters.department}`);
    return params.join("&");
  };

  const { data } = useQuery({
    queryKey: [queryKeys.LatesVacancy, page, filters],
    queryFn: () =>
      api.getData(
        `vacancies?populate[companies][populate]=logo&populate[locations]=true&populate[level]=true&populate[department]=true&pagination[page]=${page}&pagination[pageSize]=6&${buildFilters()}`
      ),
    placeholderData: (prev) => prev,
  });

  const totalPages = data?.meta?.pagination?.pageCount || 1;

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
              id={item?.id}
              logo={`http://localhost:1337${item?.companies[0]?.logo?.url}`}
              title={item?.name}
              company={item?.companies[0]?.name}
              location={item?.locations[0]?.name}
              level={item?.level?.name}
              department={item?.department?.name}
            />
          ))}
        </div>
        <div className="flex items-center gap-[30px] mt-8">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="py-2 px-3 border rounded-sm text-sm bg-white border-[#376fff] text-[#376fff] disabled:hidden"
          >
            Previous
          </button>

          <span className="text-[#484b62] text-[16px]">
            {page} / {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="py-2 px-3 border rounded-sm text-sm bg-[#376fff] text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestVacanciesSection;
