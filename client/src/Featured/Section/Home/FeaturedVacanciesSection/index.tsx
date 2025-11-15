import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../Constants/queryKeys";
import ApiServices from "../../../../Services/http";
import VacanciesCard from "../../../Components/VacanciesCard";

const FeaturedVacanciesSection = () => {
  const api = new ApiServices("http://localhost:1337/api/");

  const { data } = useQuery({
    queryKey: [queryKeys.featuredVacancy],
    queryFn: () =>
      api.getData(
        "vacancies?populate[companies][populate]=logo&populate[locations]=true&populate[level]=true&populate[department]=true&filters[featured][$eq]=true"
      ),
  });

  return (
    <div className="container max-w-[1130px] px-6 mx-auto mt-[81px]">
      <div className=" flex items-center justify-center flex-col ">
        <div className="grid grid-cols-1 gap-4">
          <h2 className=" text-[#232535] text-[18px] font-semibold leading-[1.333em]">
            Featured jobs
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
      </div>
    </div>
  );
};

export default FeaturedVacanciesSection;
