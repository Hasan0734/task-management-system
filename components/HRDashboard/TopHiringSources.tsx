import React from "react";
import Card from "../ui/Card/Card";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TopHiringSources() {
  const data: any = {
    series: [
      {
        name: "UI/UX Designer",
        data: [44, 55, 41, 67, 22, 43, 20, 23, 30, 45, 55, 65],
      },
      {
        name: "APP Development",
        data: [20, 23, 20, 8, 13, 27, 30, 35, 25, 15, 45, 55],
      },
      {
        name: "Quality Assurance",
        data: [56, 17, 15, 15, 21, 14, 15, 24, 35, 15, 11, 45],
      },
      {
        name: "Web Developer",
        data: [35, 7, 25, 13, 22, 8, 15, 22, 35, 45, 10, 28],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: true,
          color: "#e0e0e0",
          offsetX: 0,
          offsetY: 0,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
      colors: ["#484c7f", "#F19828", "#f5558d", "#a7daff"]
    },
  };

  return (
    <div className="col-span-2">
      <Card
        countNumber={""}
        titleAreaClass=""
        titleClass=""
        cardClass=""
        title="Top Hiring Sources"
      >
        <div className="w-full">
          <Chart
            width={"100%"}
            height={280}
            options={data.options}
            series={data.series}
            type="bar"
          />
        </div>
      </Card>
    </div>
  );
}
