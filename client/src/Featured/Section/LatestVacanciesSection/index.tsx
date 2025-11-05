import VacanciesCard from "../../Common/VacanciesCard";

const LatestVacanciesSection = () => {
  return (
    <div className="container max-w-[1130px] px-6 mx-auto mt-[81px] pb-[100px]">
      <div className=" flex items-center justify-center flex-col ">
        <div className="grid grid-cols-1 gap-4">
          <h2 className=" text-[#232535] text-[18px] font-semibold leading-[1.333em]">
            Latest jobs
          </h2>
          <VacanciesCard />
          <VacanciesCard />
          <VacanciesCard />
          <VacanciesCard />
          <VacanciesCard />
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
