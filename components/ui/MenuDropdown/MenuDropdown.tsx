import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { usePopper } from "react-popper";

interface PropsType {
  button: React.ReactNode;
  children: React.ReactNode;
  bodyClass: string;
  buttonClass: string;
}

export default function MenuDropdown({
  button,
  children,
  bodyClass,
  buttonClass = "",
}: PropsType) {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start", // Adjust the placement as per your requirements
    strategy: "fixed", // or 'absolute', 'fixed', etc.
  });

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button ref={setReferenceElement} className={buttonClass}>
          {button}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            ref={setPopperElement}
            {...attributes.popper}
            style={styles.popper}
            className={twMerge(
              "absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
              bodyClass
            )}
          >
            {children}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
