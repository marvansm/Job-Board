import CompaniesSection from "../Section/CompaniesSection";
import FeaturedVacanciesSection from "../Section/FeaturedVacanciesSection/index";
import LatestVacanciesSection from "../Section/LatestVacanciesSection";

const HomeTemp = () => {
  return (
    <div>
      <FeaturedVacanciesSection />
      <LatestVacanciesSection />
      <CompaniesSection />
    </div>
  );
};

export default HomeTemp;
