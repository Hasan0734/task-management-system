import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useRef, useState } from "react";

interface propsType {
  item: {
    id: number;
    title: string;
    icon: string;
    children: {
      id: number;
      name: string;
      link: string;
    }[];
  };
}

function Item({ item }: propsType) {
  const childRef = React.useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li className=" text-base text-white font-normal " key={item.id}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="py-2 px-2 flex items-center justify-between w-full"
        >
          <div className="flex items-center space-x-2">
            <Icon
              className="fill-blue-500 stroke-white-500"
              width={20}
              icon={item?.icon}
            />
            <span>{item.title}</span>
          </div>
          {item.children?.length && (
            <Icon
              className="opacity-50"
              width={20}
              icon={"iconamoon:arrow-down-2-fill"}
            />
          )}
        </button>

        {item.children?.length && isOpen && (
          <ul ref={childRef} className="space-y-1">
            {item.children.map((children, i) => (
              <li key={children.id} className="">
                <Link
                  href={children.link}
                  className="ml-7 py-1 px-3 flex items-center space-x-2"
                >
                  <span className="bg-opacity-50 w-2 h-2 bg-white rounded-full"></span>
                  <span>{children.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
}

export default Item;
