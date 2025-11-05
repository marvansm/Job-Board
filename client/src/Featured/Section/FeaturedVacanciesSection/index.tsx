import VacanciesCard from "../../Common/VacanciesCard";

const FeaturedVacanciesSection = () => {
  return (
    <div className="container max-w-[1130px] px-6 mx-auto mt-[81px]">
      <div className=" flex items-center justify-center flex-col ">
        <div className="grid grid-cols-1 gap-4">
          <h2 className=" text-[#232535] text-[18px] font-semibold leading-[1.333em]">
            Featured jobs
          </h2>
          <VacanciesCard />
          <VacanciesCard />
        </div>
      </div>
    </div>
  );
};

export default FeaturedVacanciesSection;
