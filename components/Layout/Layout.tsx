import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

interface propsType {
  children: React.ReactNode;
}

export default function Layout({ children }: propsType) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden">
        <Sidebar setToggle={setToggle} toggle={toggle} />

        <div
          className="flex-grow px-4 xl:px-8 overflow-y-scroll
         scrollbar-thin scrollbar-track-transparent scrollbar-thumb-orange-500 scrollbar-thumb-rounded-md scrollbar-w-1.5"
        >
          <Navbar setToggle={setToggle} toggle={toggle} />
          {children}
        </div>
      </div>
    </>
  );
}
