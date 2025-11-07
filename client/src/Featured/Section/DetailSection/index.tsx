import { useParams } from "@tanstack/react-router";
import {
  Briefcase,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  CircleDollarSign,
  Clock,
  MapPin,
} from "lucide-react";
import ApiServices from "../../../Services/http";

const DetailSection = () => {
  const { id } = useParams({ from: "/vacancy/$id" });
  const api = new ApiServices("http://localhost:1337/api/");
  return (
    <section className="bg-[#f9f9fc] py-10  ">
      <div className=" mx-auto container  max-w-[1130px] px-6 py-6 grid grid-cols-12 gap-6 ">
        <div className="col-span-12 lg:col-span-9 ">
          <div className="p-8  bg-[url('https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/649dfeb19b3ee66551f3e875_gradient-bg-header-top-jobboardly-x-webflow-template.jpg')] bg-cover bg-center bg-no-repeat shadow-md">
            <div className="flex items-start  gap-6 mb-4  backdrop-blur-sm p-4 ">
              <img
                src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/652ac175e4e95fb82f993eab_webflow-logo.svg"
                alt="Webflow"
                className="w-[58px] h-[58px] rounded-sm object-contain"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold text-[#a0a2b3] uppercase tracking-[.05em] ">
                  WEBFLOW
                </p>
                <h2 className="text-xl font-semibold text-gray-900">
                  Backend software engineer
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8 mb-5">
              <div>
                <p className="text-[#484b62] text-[16px] ">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod <br /> rure tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
              <div className="flex  gap-3">
                <span className="px-3 py-1.5 flex gap-1 items-center bg-white/70 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700">
                  <MapPin size={14} />
                  Remote
                </span>
                <span className="px-3 py-1.5 flex gap-1 items-center bg-white/70 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700">
                  <BriefcaseBusiness size={14} />
                  Development
                </span>
                <span className="px-3 py-1.5 flex gap-1 items-center bg-white/70 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700">
                  <ChartNoAxesColumnIncreasing size={14} />
                  Senior
                </span>
                <span className="px-3 py-1.5 flex gap-1 items-center bg-white/70 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700">
                  <Clock size={14} />
                  Full Time
                </span>
                <span className="px-3 py-1.5 flex gap-1 items-center bg-white/70 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700">
                  <CircleDollarSign size={14} />
                  $100,000 USD
                </span>
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
                Posted on: <span className="text-gray-700">July 20, 2023</span>
              </p>
            </div>
            <p className="text-[#484b62] text-[16px] leading-relaxed mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              augue sagittis erat consectetur este blandit blandit nec mauris
              pulvinar. Lectus duis amet tortor sit tincidunt rhoncus tincidunt
              imperdiet penatibus vitae risus, vitae blandit auctor.
            </p>
            <p className="text-[#484b62] text-[16px] leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum nostrud exercitation
              ullamco laboris nisi ut aliquip.
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
                src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/652ac175e4e95fb82f993eab_webflow-logo.svg"
                alt="Webflow"
                className="w-10 h-10"
              />
              <h4 className="font-semibold text-black text-[18px]">
                About Webflow
              </h4>
            </div>
            <p className="text-gray-600 text-[15px] mb-4 leading-7">
              Excepteur sint occaecat siter dolor cupidatat non proider sunt in
              culpa qui official ers.
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
            <h4 className="font-semibold text-gray-900 text-[18px] mb-2">
              Post a job today
            </h4>
            <p className="text-gray-600 text-[15px] mb-4">
              Lorem ipsum dolor sitameter consectetur adipisc metir.
            </p>
            <button className="w-full bg-[#4469FF] text-white text-sm font-medium rounded-md py-2 hover:bg-blue-700">
              Post a featured job
            </button>
            <p className="text-center mt-2 text-[15px] text-gray-500">
              or{" "}
              <a href="#" className="underline text-[#484b62]">
                post a free job
              </a>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default DetailSection;
