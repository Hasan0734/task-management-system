import Applications from "@/components/HRDashboard/Applications";
import EmployeeInfo from "@/components/HRDashboard/EmployeeInfo";
import EmployeesAvailability from "@/components/HRDashboard/EmployeesAvailability";
import InterviewHired from "@/components/HRDashboard/InterviewHired";
import TopHiringSources from "@/components/HRDashboard/TopHiringSources";
import TotalEmployees from "@/components/HRDashboard/TotalEmployees";
import UpcommingInterviews from "@/components/HRDashboard/UpcommingInterviews";
import Layout from "@/components/Layout/Layout";
import React from "react";

export default function HRDashboard() {
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-5 items-start py-5">
        <div className="col-span-12 xl:col-span-8 grid grid-cols-2 gap-4">
          <EmployeeInfo />
          <EmployeesAvailability />
          <TotalEmployees />
          <TopHiringSources />
        </div>
        <div className="col-span-12 xl:col-span-4 grid grid-cols-2 gap-4 ">
          <Applications />
          <div className="col-span-2 md:col-span-1 xl:col-span-2 grid grid-cols-2 gap-4">
            <InterviewHired
              leftIcon="mdi:chart-bar"
              icon={"fa6-solid:users"}
              title="Interview"
              count={50}
            />
            <InterviewHired
              leftIcon="mdi:chart-line"
              icon={"icon-park-outline:holding-hands"}
              title="Hired"
              count={20}
            />
          </div>
          <UpcommingInterviews />
        </div>
      </div>
    </Layout>
  );
}
