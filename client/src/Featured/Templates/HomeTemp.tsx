import { useState } from "react";
import BannerSection from "../Section/Home/BannerSection";
import CompaniesSection from "../Section/Home/CompaniesSection";
import FeaturedVacanciesSection from "../Section/Home/FeaturedVacanciesSection/index";
import LatestVacanciesSection from "../Section/Home/LatestVacanciesSection";

const HomeTemp = () => {
  const [filters, setFilters] = useState({
    location: "",
    level: "",
    department: "",
  });
  const [search, setSearch] = useState("");
  return (
    <div>
      <BannerSection
        search={search}
        setSearch={setSearch}
        filters={filters}
        setFilters={setFilters}
      />
      <FeaturedVacanciesSection />
      <LatestVacanciesSection filters={filters} search={search} />
      <CompaniesSection />
    </div>
  );
};

export default HomeTemp;
