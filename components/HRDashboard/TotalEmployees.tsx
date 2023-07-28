import React from "react";
import Card from "../ui/Card/Card";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TotalEmployees() {
  const data: any = {
    series: [44, 55],
    options: {
      dataLabels: {
        enabled: false,
      },
      colors: ["#a7daff", "#f5558d"],
      legend: {
        position: "bottom",
        horizontalAlign: "center",
      },
      labels: ["Man", "Women"],
    },
  };
  return (
    <div className="col-span-2 md:col-span-1">
      <Card
        countNumber={423}
        titleAreaClass=""
        titleClass=""
        cardClass="h-full"
        title="Total Employees"
      >
        <div className="w-full mt-5">
          <Chart
            width={"100%"}
            height={280}
            options={data.options}
            series={data.series}
            type="donut"
          />
        </div>
      </Card>
    </div>
  );
}
