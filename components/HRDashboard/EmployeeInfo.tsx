import React from "react";
import Card from "../ui/Card/Card";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function EmployeeInfo() {
  const data: any = {
    series: [
      {
        name: "Available",
        data: [
          [1327359600000, 30.95],
          [1327446000000, 31.34],
          [1327532400000, 31.18],
          [1327618800000, 31.05],
          [1327878000000, 31.0],
          [1327964400000, 30.95],
          [1328050800000, 31.24],
          [1328137200000, 31.29]
        ],
      },
    ],
    options: {
      chart: {
        type: "line",
        toolbar: {
          show: false,
        },
      },
      colors: ["#f5558d", "#F19828"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 5,
      },

      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "01/01/2022 GMT",
          "01/02/2022 GMT",
          "01/03/2022 GMT",
          "01/04/2022 GMT",
          "01/05/2022 GMT",
          "01/06/2022 GMT",
        ],

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
      fill: {
        type: "gradient",
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
