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
      <div className="grid grid-cols-12 gap-5 items-start">
        <div className="col-span-7 grid grid-cols-2 gap-4">
          <EmployeeInfo />
          <EmployeesAvailability />
          <TotalEmployees />
          <TopHiringSources />
        </div>
        <div className="col-span-5 grid grid-cols-1 gap-4">
          <Applications />
          <InterviewHired
            icon={"mdi:users-outline"}
            title="Interview"
            count={50}
          />
          <InterviewHired
            icon={"icon-park-outline:holding-hands"}
            title="Hired"
            count={20}
          />
          <UpcommingInterviews />
        </div>
      </div>
    </Layout>
  );
}
