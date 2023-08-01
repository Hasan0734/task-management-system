import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import React, { useState } from "react";


interface propsType {
  children: React.ReactNode;
}

export default function Layout({ children }: propsType) {
  // const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden">
        <Sidebar />
        <div
          className="flex-grow px-4 xl:px-8 overflow-y-scroll
         scrollbar-thin scrollbar-track-transparent scrollbar-thumb-orange-500 scrollbar-thumb-rounded-md scrollbar-w-1.5"
        >
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}
