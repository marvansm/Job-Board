import BannerSection from "../Section/BannerSection";
import CompaniesSection from "../Section/CompaniesSection";
import FeaturedVacanciesSection from "../Section/FeaturedVacanciesSection/index";
import LatestVacanciesSection from "../Section/LatestVacanciesSection";

const HomeTemp = () => {
  return (
    <div>
      <BannerSection />
      <FeaturedVacanciesSection />
      <LatestVacanciesSection />
      <CompaniesSection />
    </div>
  );
};

export default HomeTemp;
