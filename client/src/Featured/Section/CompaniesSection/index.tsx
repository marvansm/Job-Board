import CompaniesCard from "../../Common/CompaniesCard";

const CompaniesSection = () => {
  return (
    <div className="bg-[#faf9fc] py-[100px]">
      <div className="container max-w-[1130px] px-6 mx-auto">
        <div className="heading flex items-end justify-between mb-6">
          <div>
            <h2 className="text-[32px] text-[#232535] font-semibold leading-[41.984px] mb-2">
              Featured companies
            </h2>
            <p className="text-[#484b62] text-[16px] font-normal leading-[26px] opacity-[.8]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="rounded-sm px-3 py-2 text-[14px] leading-[17.99px] border border-[#eaebf3] shadow-sm font-medium hover:scale-[1.01] duration-200 cursor-pointer">
            See all companies
          </button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <CompaniesCard />
          <CompaniesCard />
          <CompaniesCard />
          <CompaniesCard />
          <CompaniesCard />
          <CompaniesCard />
          <CompaniesCard />
          <CompaniesCard />
        </div>
        <div className="grid grid-cols-2">
          <div
            className="border border-[#514fc0] p-12 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `
      url('https://cdn.prod.website-files.com/6499e85.../649b8a2..._dot-bg-card-feature-jobboardly-x-webflow-template.png'),
      linear-gradient(to top, #5e5bff 16%, var(--accent--primary-1))
    `,
              backgroundPosition: "0 0, 0 0",
              backgroundRepeat: "no-repeat, repeat",
              backgroundSize: "cover, auto",
            }}
          >
            asdasdalsdaldkaldklasd
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesSection;
