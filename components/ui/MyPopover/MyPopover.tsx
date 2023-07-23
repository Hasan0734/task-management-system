import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import React from 'react'

interface propsType {
    button: React.ReactElement,
    children: React.ReactNode,
    bodyClass: string,
    buttonClass: string,
    panelClass: string
}

export default function MyPopover({
  button,
  children,
  buttonClass,
  bodyClass,
  panelClass,
}: propsType) {
  const allStyle = twMerge(
    "bg-white w-[250px] sm:w-[400px]  max-h-[80vh] overflow-auto ring-1 ring-gray-200 rounded shadow-md",
    bodyClass
  );
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={` outline-none
                ${open ? "" : "text-opacity-90"}
                ${twMerge(
                  "z-10",
                  buttonClass
                )}`}
          >
            {button}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-0"
            enterTo="opacity-100 translate-y-1"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-1"
            leaveTo="opacity-0 translate-y-0"
          >
            <Popover.Panel
              className={twMerge(
                "absolute right-0 z-[160] mt-2  transform",
                panelClass
              )}
            >
              <div className={allStyle}>{children}</div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

