import React from 'react';
import Card from '../ui/Card/Card';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function EmployeeInfo() {
  const data: any = {
    series: [
      {
        name: 'Available',
        data: [
          [new Date('2023-01-10').getTime(), 5],
          [new Date('2023-02-10').getTime(), 50],
          [new Date('2023-03-10').getTime(), 20],
          [new Date('2023-04-10').getTime(), 10],
          [new Date('2023-05-10').getTime(), 30],
          [new Date('2023-06-10').getTime(), 80],
          [new Date('2023-07-10').getTime(), 60],
          [new Date('2023-08-10').getTime(), 35],
          [new Date('2023-09-10').getTime(), 15],
          [new Date('2023-10-10').getTime(), 25],
          [new Date('2023-11-10').getTime(), 32],
          [new Date('2023-12-10').getTime(), 65],
        ],
      },
    ],

    options: {
      chart: {
        type: 'line',
        toolbar: {
          show: false,
        },
        zoom: {
          type: 'x',
          enabled: false,
          autoScaleYaxis: true,
        },
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 5,
      },

      grid: {
        show: true,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '1/11/2000',
          '2/11/2000',
          '3/11/2000',
          '4/11/2000',
          '5/11/2000',
          '6/11/2000',
          '7/11/2000',
          '8/11/2000',
          '9/11/2000',
          '10/11/2000',
          '11/11/2000',
          '12/11/2000',
          '1/11/2001',
          '2/11/2001',
          '3/11/2001',
          '4/11/2001',
          '5/11/2001',
          '6/11/2001',
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value: any, timestamp: any, opts: any) {
            return opts.dateFormatter(new Date(timestamp), 'dd MMM');
          },
        },

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
      markers: {
        size: 0,
        colors: undefined,
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: 'circle',
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#f5558d', '#F19828'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [30, 80],
        },
      },
    },
  };

  return (
    <div className="col-span-2">
      <Card
        countNumber={''}
        titleAreaClass=""
        titleClass=""
        cardClass=""
        title="Employee Info"
      >
        <div id="employee-line-chart" className="w-full">
          <Chart
            width={'100%'}
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
