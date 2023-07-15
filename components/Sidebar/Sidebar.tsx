import { sidebar } from "@/utils/data";
import React from "react";
import { Icon } from "@iconify/react";
import Item from "./Item";

function Sidebar() {
  return (
    <div className="w-[315px] pl-6 py-6 h-full">
      <div className="relative overflow-hidden w-full bg-primary h-full rounded-3xl p-5">
        <div className="flex items-center gap-3 justify-center mt-10">
          <div className="p-4 rounded-full bg-white flex items-center justify-center">
            <Icon icon="solar:clipboard-check-linear" width={40} />
          </div>
          <h3 className="text-3xl text-white font-bold">My-Task</h3>
        </div>
        <ul className="mt-10 space-y-3 max-h-[600px] overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
          {sidebar.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
        <div className="absolute bottom-0 bg-primary py-10 left-0 right-0">
          <button className="w-full flex items-center justify-center text-center">
            <Icon
              className="text-white"
              icon={"material-symbols:logout"}
              width={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
