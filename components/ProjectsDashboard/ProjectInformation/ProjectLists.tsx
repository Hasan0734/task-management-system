import Card from "@/components/ui/Card/Card";
import Table from "@/components/ui/Table/Table";
import { projectsData } from "@/utils/data";
import React from "react";
import { twMerge } from "tailwind-merge";

const theadData = [
  "title",
  "date start",
  "deadline",
  "leader",
  "completion",
  "stage",
];


export default function ProjectLists() {


  return (
    <Card title="Project Information">
      <Table theadData={theadData}>
        {projectsData.map((project) => (
          <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td className="px-6 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">
              {project.title}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-3.5 whitespace-nowrap">
              {project.dateStart}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-3.5 whitespace-nowrap">
              {project.deadLine}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-3.5 whitespace-nowrap flex items-center gap-2">
              <img
                className="w-7 h-7 rounded-full overflow-hidden"
                src={project.leader.avatar}
                alt="avatar"
              />
              <span>{project.leader.name}</span>
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-3.5 whitespace-nowrap">
              <div className="bg-gray-200 rounded-full h-4">
                <div
                  className={twMerge("bg-orange-500  text-[12px]  flex items-center justify-center  text-center h-4",
                  ` ${project.completion === "100%" ? "rounded-full" : "rounded-l-full"}
                   ${Number(project.completion.split('%')[0]) <= 15 ? "text-black":"text-white" }` )}
                  style={{ width: project.completion }}
                >
                  {project.completion}
                </div>
              </div>
            </td>
            <td className="text-sm  font-semibold text-gray-500 px-6 py-3.5 whitespace-nowrap uppercase  ">
              {project.stage}
            </td>
          </tr>
        ))}
      </Table>
    </Card>
  );
}
