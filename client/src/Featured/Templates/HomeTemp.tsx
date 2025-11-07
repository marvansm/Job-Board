import { useState } from "react";
import BannerSection from "../Section/BannerSection";
import CompaniesSection from "../Section/CompaniesSection";
import FeaturedVacanciesSection from "../Section/FeaturedVacanciesSection/index";
import LatestVacanciesSection from "../Section/LatestVacanciesSection";

const HomeTemp = () => {
  const [filters, setFilters] = useState({
    location: "",
    level: "",
    department: "",
  });
  return (
    <div>
      <BannerSection filters={filters} setFilters={setFilters} />
      <LatestVacanciesSection filters={filters} />
      <FeaturedVacanciesSection />
      <CompaniesSection />
    </div>
  );
};

export default HomeTemp;
