"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Card from "@/components/ui/Card/Card";
import ProjectCard from "@/components/Projects/ProjectCard";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const categories = [
  { id: 1, name: "All", slug: "all" },
  { id: 2, name: "Started", slug: "started" },
  { id: 3, name: "Approval", slug: "approval" },
  { id: 4, name: "Completed", slug: "completed" },
];

const page = () => {
  return (
    <Tab.Group>
      <div className="py-5">
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <h3 className="text-gray-800 text-3xl font-bold">Projects</h3>
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-1 bg-primary px-2.5 rounded text-sm py-2 text-white">
              <Icon icon="ic:baseline-plus" width={22} />
              <span>Create Project</span>
            </button>
            <div>
              <Tab.List className="flex space-x-1 rounded-md border border-primary">
                {categories.map((category) => (
                  <Tab
                    key={category.id}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded- py-2 px-4 text-sm font-normal  ",
                        "focus:outline-none",
                        selected ? "bg-primary text-white" : "  text-graylight"
                      )
                    }
                  >
                    {category.name}
                  </Tab>
                ))}
              </Tab.List>
            </div>
          </div>
        </div>

        <Tab.Panels className="mt-14">
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard /> 
              <ProjectCard />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default page;
