"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const page = () => {
  return (
    <div className="py-5">
      <div className="flex items-center justify-between border-b border-gray-200 pb-3">
        <h3 className="text-gray-800 text-3xl font-bold">Projects</h3>
        <div>
          <button className="flex items-center gap-1 bg-primary px-2.5 rounded text-sm py-2 text-white">
            <Icon icon="ic:baseline-plus" width={22} />
            <span>Create Project</span>
          </button>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
