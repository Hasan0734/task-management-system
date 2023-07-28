import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { twMerge } from "tailwind-merge";

interface PropsType {
  icon: string;
  title: string;
  count: number;
  bodyClass: string;
}

export default function AvailabilityCard({
  icon,
  title,
  count,
  bodyClass,
}: PropsType) {
  return (
    <div
      className={twMerge(
        "bg-white border boder-gray-300 rounded-md p-3",
        bodyClass
      )}
    >
      <div>
        <Icon icon={icon} width={26} />
      </div>
      <div className="mt-4">
        <h4 className="text-gray-800 text-lg font-semibold">{title}</h4>
        <p className="text-gray-400 text-base">{count}</p>
      </div>
    </div>
  );
}
