"use client";

import Card from "@/components/ui/Card/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table/Table";
import TextField from "@/components/ui/inputs/TextField";
import { projectsData } from "@/utils/data";
import {
  calculateStartEndIndices,
  generatePagination,
} from "@/utils/generatePagination";
import React, { useEffect, useState } from "react";
import ProjectTableItem from "./ProjectTableItem";

const theadData = [
  "title",
  "date start",
  "deadline",
  "leader",
  "completion",
  "stage",
];

export default function ProjectLists() {
  let tableData = projectsData || [];
  let [currentPage, setCurrentPage] = useState(1);
  let [entities, setEntities] = useState(5);
  let pagination = generatePagination(tableData.length, entities);
  let { start, end } = calculateStartEndIndices(currentPage, entities);
  let data = tableData.slice(start, end);

  return (
    <Card title="Project Information">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block">Show</span>
          <select
            id=""
            name=""
            onChange={(e) => setEntities(Number(e.target.value))}
            className="block w-full rounded-sm border-0 py-1 text-gray-900 ring-1
             ring-gray-300 focus:ring-1 focus:outline-none focus:ring-indigo-600  sm:text-sm px-2"
          >
            <option selected value={5}>
              5
            </option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="inline-block">entries</span>
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="table-search">Search</label>
          <TextField
            name="table-search"
            id="table-search"
            className="focus:ring-1"
          />
        </div>
      </div>

      <Table theadData={theadData}>
        {data.map((project) => (
          <ProjectTableItem project={project} key={project.id} />
        ))}
      </Table>

      <div className="py-3 flex items-center justify-between">
        <div className="text-sm">
          Showing {start || 1} to {end} of {end - start} entries
        </div>
        <div className="">
          <Pagination
            pagination={pagination}
            entities={entities}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </Card>
  );
}
