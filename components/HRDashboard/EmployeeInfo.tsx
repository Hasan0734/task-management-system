import React from "react";
import Card from "../ui/Card/Card";
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function EmployeeInfo() {
  const data: any = {
    series: [
      {
        name: "Sales",
        data: [654, 820, 102, 540, 154, 614],
      },
    ],
    options: {
      chart: {
        type: "line",
        toolbar: {
          show: false,
        },
      },
      colors: ["#5f5af6"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },

      grid: {
        show: true,
      },
      xaxis: {
        categories: [],
       
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        crosshairs: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    },
  };
  return (
    <div className="col-span-2">
      <Card
        countNumber={""}
        titleAreaClass=""
        titleClass=""
        cardClass=""
        title="Employee Info"
      >
        <div id="sales-line-chart" className="w-full">
          <Chart
            width={"100%"}
            options={data.options}
            series={data.series}
            type="line"
            height={180}
          />
        </div>
      </Card>
    </div>
  );
}
