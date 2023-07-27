import React from "react";
import Card from "../ui/Card/Card";
import { Icon } from "@iconify/react/dist/iconify.js";

interface PropsType {
  icon: string;
  title: string;
  count: number;
}

export default function InterviewHired({ icon, title, count }: PropsType) {
  return (
    <>
      <Card
        countNumber={""}
        titleAreaClass=""
        titleClass=""
        cardClass=""
        title=""
      >
        <div className="flex items-center gap-3">
          <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center">
            <Icon className="text-white" icon={icon} width={35} />
          </div>
          <div className="text-gray-800">
            <h2 className="text-3xl font-bold ">{count}</h2>
            <p className="text-sm text-gray-400">{title}</p>
          </div>
        </div>
      </Card>
    </>
  );
}
