import React from "react";
import Card from "../ui/Card/Card";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Applications() {
  return (
    <Card
      countNumber={""}
      titleAreaClass=""
      titleClass=""
      cardClass="bg-primary"
      title=""
    >
      <div className="flex justify-between">
        <div>
          <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
            <Icon width={35} icon={"mdi:file-text-outline"} />
          </div>
          <div className="text-white mt-4">
            <h2 className="text-4xl font-bold ">1546</h2>
            <p className="text-sm">Applications</p>
          </div>
        </div>
        <div className="w-60">
          <img className="w-full" src="assets/interview.svg" alt="card-image" />
        </div>
      </div>
    </Card>
  );
}
