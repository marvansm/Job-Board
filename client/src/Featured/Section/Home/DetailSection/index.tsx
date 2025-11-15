import {
  Briefcase,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  CircleDollarSign,
  Clock,
  MapPin,
} from "lucide-react";
import { useParams, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import ApiServices from "../../../../Services/http";
import { queryKeys } from "../../../../Constants/queryKeys";
import { useAppliedVacancies, isUserLoggedIn } from "../../../../Context/AppliedVacanciesContext";
import toast from "react-hot-toast";

const DetailSection = () => {
  const { id } = useParams({ from: "/vacancy/$id" });
  const navigate = useNavigate();
  const { addApply, checkApplied } = useAppliedVacancies();
  const api = new ApiServices("http://localhost:1337/api/");

  const {
    data: vacancyResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [queryKeys.vacancy, id],
    queryFn: () =>
      api.getData(
        `vacancies/${id}?populate[companies][populate]=logo&populate[locations]=true&populate[level]=true&populate[department]=true`
      ),
  });

  const vacancy = vacancyResponse?.data;

  if (isLoading) {
    return (
      <section className="bg-[#f9f9fc] py-10">
        <div className="mx-auto container max-w-[1130px] px-6 py-6">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (isError || !vacancy) {
    return (
      <section className="bg-[#f9f9fc] py-10">
        <div className="mx-auto container max-w-[1130px] px-6 py-6">
          <p>Error loading vacancy details</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f9f9fc] py-10  ">
      <div className=" mx-auto container  max-w-[1130px] px-6 py-6 grid grid-cols-12 gap-6 ">
        <div className="col-span-12 lg:col-span-9 ">
          <div className="p-8  bg-[url('https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/649dfeb19b3ee66551f3e875_gradient-bg-header-top-jobboardly-x-webflow-template.jpg')] bg-cover bg-center bg-no-repeat shadow-md">
            <div className="flex items-start  gap-6 mb-4  backdrop-blur-sm p-4 ">
              <img
                src={`http://localhost:1337${vacancy?.companies[0]?.logo?.url}`}
                alt={vacancy?.companies[0]?.name || "Company"}
                className="w-[58px] h-[58px] rounded-sm object-contain"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold text-[#a0a2b3] uppercase tracking-[.05em] ">
                  {vacancy?.companies[0]?.name}
                </p>
                <h2 className="text-xl font-semibold text-gray-900">
                  {vacancy?.name}
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8 mb-5">
              <div>
                <p className="text-[#484b62] text-[16px] ">
                  {vacancy?.description || "No description available"}
                </p>
              </div>
              <div className="flex  gap-3">
                {vacancy?.locations?.[0]?.name && (
                  <span className="px-3 py-1.5 flex gap-1 items-center bg-white/70 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700">
                    <MapPin size={14} />
                    {vacancy.locations[0].name}
                  </span>
                )}
                {vacancy?.department?.name && (
                  <span className="px-3 py-1.5 flex gap-1 items-center bg-white/70 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700">
                    <BriefcaseBusiness size={14} />
                    {vacancy.department.name}
                  </span>
                )}
                {vacancy?.level?.name && (
                  <span className="px-3 py-1.5 flex gap-1 items-center bg-white/70 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700">
                    <ChartNoAxesColumnIncreasing size={14} />
                    {vacancy.level.name}
                  </span>
                )}
                <span className="px-3 py-1.5 flex gap-1 items-center bg-white/70 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700">
                  <Clock size={14} />
                  Full Time
                </span>
                {vacancy?.salary && (
                  <span className="px-3 py-1.5 flex gap-1 items-center bg-white/70 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700">
                    <CircleDollarSign size={14} />
                    {vacancy.salary}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm p-8">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-[20px] mt-10 text-black">
                Job description
              </h3>
              <p className="text-[16px] flex items-center gap-1 text-[#484b62] font-medium">
                <Briefcase size={15} />
                Posted on:{" "}
                <span className="text-gray-700">
                  {new Date(vacancy?.createdAt).toLocaleDateString()}
                </span>
              </p>
            </div>
            <p className="text-[#484b62] text-[16px] leading-relaxed mb-5">
              {vacancy?.description || "No description available"}
            </p>

            <h3 className="font-semibold text-[20px] text-black mt-14 mb-3">
              Responsibilities
            </h3>
            <p className="text-[#484b62] text-[16px] leading-relaxed mb-3">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <ul className="list-disc pl-10 text-[#484b62] text-[16px] leading-relaxed space-y-2">
              <li>
                Neque sodales ut etiam sit amet nisl purus non tellus orci ac
                auctor.
              </li>
              <li>
                Adipiscing elit ut aliquam purus sit amet viverra suspendisse
                potenti.
              </li>
              <li>
                Mauris commodo quis imperdiet massa tincidunt nunc pulvinar.
              </li>
            </ul>

            <h3 className="font-semibold text-[20px] text-black  mt-14 mb-3">
              Job requirements
            </h3>
            <p className="text-[#484b62] text-[16px] leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <ul className="list-disc pl-10 mt-4 text-[#484b62] text-[16px] leading-relaxed space-y-2">
              <li>
                Neque sodales ut etiam sit amet nisl purus non tellus orci ac
                auctor.
              </li>
              <li>
                Adipiscing elit ut aliquam purus sit amet viverra suspendisse
                potenti.
              </li>
              <li>
                Mauris commodo quis imperdiet massa tincidunt nunc pulvinar.
              </li>
            </ul>
          </div>
        </div>

        <aside className="col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-white shadow-sm rounded-lg p-4">
            <div className="flex flex-col  gap-3 mb-3">
              <img
                src={`http://localhost:1337${vacancy?.companies[0]?.logo?.url}`}
                alt={vacancy?.companies[0]?.name || "Company"}
                className="w-10 h-10"
              />
              <h4 className="font-semibold text-black text-[18px]">
                About {vacancy?.companies[0]?.name}
              </h4>
            </div>
            <p className="text-gray-600 text-[15px] mb-4 leading-7">
              {vacancy?.companies[0]?.description || "No description available"}
            </p>
            <button className="w-full bg-gray-50 text-sm font-medium border border-gray-200 rounded-md py-2 hover:bg-gray-100">
              View company
            </button>
          </div>

          <div className="bg-white shadow-sm rounded-lg p-5">
            <div className="mb-2">
              <img
                className="w-9 h-9"
                src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/64bfe91d7095177ffdb5693d_post-a-job-icon-jobboardly-webflow-ecommerce-template.jpg"
                alt=""
              />
            </div>
            <button
              onClick={() => {
           
                if (!isUserLoggedIn()) {
                  toast.error("You must login first!");
                  navigate({ to: "/login" });
                  return;
                }

    
                if (checkApplied(vacancy?.id)) {
                  toast.error("You already applied!");
                  return;
                }

         
                addApply({
                  id: vacancy?.id,
                  name: vacancy?.name,
                  company: vacancy?.companies[0]?.name,
                  appliedAt: new Date(),
                });
                toast.success("Application successful!");
              }}
              disabled={checkApplied(vacancy?.id)}
              className="w-full bg-[#4469FF] text-white text-sm font-medium rounded-md py-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {checkApplied(vacancy?.id) ? "✓ Applied" : "Apply"}
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default DetailSection;
