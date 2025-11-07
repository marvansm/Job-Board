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
