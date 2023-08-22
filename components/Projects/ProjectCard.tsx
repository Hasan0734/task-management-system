import React from "react";
import Card from "../ui/Card/Card";
import { Icon } from "@iconify/react/dist/iconify.js";



const employees = [
    { id: 1, avatar: "/assets/avatars/avatar3.jpg" },
    { id: 2, avatar: "/assets/avatars/avatar4.jpg" },
    { id: 3, avatar: "/assets/avatars/avatar7.jpg" },
    { id: 4, avatar: "/assets/avatars/avatar8.jpg" },
  ];

const ProjectCard = () => {
  return (
    <>
      <Card cardClass="">
        <div className="flex items-center justify-center">
          <div className="text-center relative">
            <div className="bg-[#eee5ff] w-[60px] h-[60px] flex items-center justify-center rounded absolute -top-10 left-0 right-0">
              <Icon icon="pepicons-pop:paint-pallet" width={30} />
            </div>
            <h5 className="text-graylight-500 font-bold text-xs mt-6 ml-1">
              Sunburst
            </h5>
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h4 className="text-gray-800 font-bold text-base">UI/UX Design</h4>
            <button className="px-3 py-2 border border-gray-200 rounded-md">
              <Icon className="text-red-500" icon={"material-symbols:delete"} />
            </button>
          </div>

          <ul className="hidden xs:flex -space-x-3">
            {employees.map((employee) => (
              <li key={employee.id} className="">
                <img
                  className="w-6 h-6 rounded-full 
                          hover:scale-110 cursor-pointer border-2 border-white"
                  src={employee.avatar}
                />
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4  ">
            <div className="flex items-center space-x-2">
              <Icon icon={"fluent:attach-12-filled"} width={20} />
              <p className="text-gray-800 text-sm">5 Attach</p>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon={"gg:sand-clock"} width={20} />
              <p className="text-sm text-lightgreen">Completed</p>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon={"ic:outline-group"} width={20} />
              <p className="text-gray-800 text-sm">5 Members</p>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon={"ic:baseline-message"} width={20} />
              <p className="text-gray-800 text-sm">10</p>
            </div>
          </div>
          <div className="border-t border-gray-200"></div>
        </div>
        <div className="pt-2">
          <div className="flex items-center justify-between">
            <h5 className="font-bold text-gray-800 text-xs">Progress</h5>
            <span className="bg-lightpink-300 rounded-md p-1 flex items-center gap-[2px]">
              <Icon icon="mdi:clock" />
              <span className="text-xs px-1">35 Days Left</span>
            </span>
          </div>
          <div className="bg-graylight-300 w-full h-2 mt-3 rounded-full flex items-center gap-1">
            <div className="bg-secondary h-full rounded-l-full w-1/4" />
            <div className="bg-secondary h-full  w-1/4" />
            <div className="bg-secondary h-full rounded-r-full w-1/4" />
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProjectCard;
