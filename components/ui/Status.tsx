import React from "react";
import { twMerge } from "tailwind-merge";

interface propsType {
  className?: string;
  children?: React.ReactNode
}

const Status = ({ className, children }: propsType) => {
  return (
    <span className={twMerge("px-2 py-1 bg-gray-200 rounded-md", className)}>
        {children}
    </span>
  );
};

export default Status;
