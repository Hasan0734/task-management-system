import React from "react";
import Card from "../ui/Card/Card";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TotalEmployees() {
  const data: any = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },

      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="col-span-2 md:col-span-1">
      <Card
        countNumber={423}
        titleAreaClass=""
        titleClass=""
        cardClass=""
        title="Total Employees"
      >
        <div className="w-full">
          <Chart
            width={"100%"}
            options={data.options}
            series={data.series}
            type="pie"
            height={180}
          />
        </div>
      </Card>
    </div>
  );
}
