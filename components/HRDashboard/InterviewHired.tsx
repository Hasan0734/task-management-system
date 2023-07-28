import React from "react";
import Card from "../ui/Card/Card";
import { Icon } from "@iconify/react/dist/iconify.js";

interface PropsType {
  icon: string;
  title: string;
  count: number;
  leftIcon: string;
}

export default function InterviewHired({ icon, title, count, leftIcon }: PropsType) {
  return (
    <div className="col-span-2">
      <Card
        countNumber={""}
        titleAreaClass=""
        titleClass=""
        cardClass="flex items-center justify-between"
        title=""
      >
        <div className="flex items-center gap-3">
          <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center">
            <Icon className="text-white" icon={icon} width={30} />
          </div>
          <div className="text-gray-800">
            <h2 className="text-3xl font-bold ">{count}</h2>
            <p className="text-sm text-gray-400">{title}</p>
          </div>
        </div>
        <div>
          <Icon className="text-gray-600" icon={leftIcon} width={35} />
        </div>
      </Card>
    </div>
  );
}
