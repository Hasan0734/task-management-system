import React from "react";
import { twMerge } from "tailwind-merge";

interface PropsType {
    children: React.ReactNode;
    className?: string;
}


const TableData = ({children,className}:PropsType) => {
  return (
    <td className={twMerge("text-sm text-gray-900 font-light px-6 py-3.5 whitespace-nowrap", className)}>
      {children}
    </td>
  );
};

export default TableData;
