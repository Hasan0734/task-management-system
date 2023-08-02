import Status from "@/components/ui/Status";
import TableData from "@/components/ui/Table/TableData";
import React from "react";
import { twMerge } from "tailwind-merge";

const ProjectTableItem = ({ project }: any) => {
  return (
    <>
      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
        <TableData className="font-medium text-gray-900">
          {project.id}
        </TableData>
        <TableData>{project.dateStart}</TableData>
        <TableData>{project.deadLine}</TableData>
        <TableData className=" flex items-center gap-2">
          <img
            className="w-7 h-7 rounded-full overflow-hidden"
            src={project.leader.avatar}
            alt="avatar"
          />
          <span>{project.leader.name}</span>
        </TableData>
        <TableData>
          <div className="bg-gray-200 rounded-full h-4">
            <div
              className={twMerge(
                "bg-primary  text-[12px]  flex items-center justify-center  text-center h-4",
                ` ${
                  project.completion === "100%"
                    ? "rounded-full"
                    : "rounded-l-full"
                }
                   ${
                     Number(project.completion.split("%")[0]) <= 15
                       ? "text-black"
                       : "text-white"
                   }`
              )}
              style={{ width: project.completion }}
            >
              {project.completion}
            </div>
          </div>
        </TableData>
        <TableData className="text-xs font-semibold uppercase">
          {project.stage.toLowerCase() === "medium" && (
            <Status className="bg-[#ffc107] text-white">{project.stage}</Status>
          )}
          {project.stage.toLowerCase() === "low" && (
            <Status className="bg-[#198754] text-white">{project.stage}</Status>
          )}
          {project.stage.toLowerCase() === "high" && (
            <Status className="bg-[#dc3545] text-white">{project.stage}</Status>
          )}
        </TableData>
      </tr>
    </>
  );
};

export default ProjectTableItem;
