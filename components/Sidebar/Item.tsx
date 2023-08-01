
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef, useState } from 'react';

interface propsType {
  collapse: boolean;
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

const Item = ({ item, collapse }: propsType) => {
  const childRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const checkCurrent = (data: any[]) => {
    const filter = data.filter((dt) => dt.link === pathname);
    if (isOpen) {
      return false;
    }
    return filter.length ? true : false;
  };

  const activeRoute = (child: any) => {
    const exist = child.link === pathname;
    return exist;
  };
  const childOpen = (children: any[]) => {
    if (children?.length > 0) {
      if (isOpen) {
        return `${childRef.current?.scrollHeight}px`;
      }
      if (checkCurrent(children)) {
        return `${childRef.current?.scrollHeight}px`;
      }
    }
    return '0px';
  };

  return (
    <>
      <li className=" text-base font-normal " key={item.id}>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`${
            checkCurrent(item.children) ? 'text-orange-500' : ' text-white  '
          } py-2 px-2 transition-all  duration-300 flex items-center ${collapse ? 'justify-center' : 'justify-between'} w-full hover:text-orange-500`}
        >
          <div className="flex items-center space-x-2">
            <Icon
              className="fill-blue-500 stroke-white-500"
              width={20}
              icon={item?.icon}
            />
            <span className={`transition-all duration-300 ${!collapse ? 'block' : 'hidden'}`}>{item.title}</span>
          </div>
          {item.children?.length > 0 && !collapse &&(
            <Icon
              className="opacity-50"
              width={20}
              icon={'iconamoon:arrow-down-2-fill'}
            />
          )}
        </button>

        {!collapse &&
          <ul
            style={{
              height: childOpen(item.children),
            }}
            ref={childRef}
            className={`space-y-1 transition-all duration-300 overflow-hidden`}
          >
            {item.children.map((children, i) => (
              <li key={children.id}>
                <Link
                  href={children.link}
                  className={`${
                    activeRoute(children) ? 'text-orange-500' : 'text-white'
                  } ml-7 py-1 px-3 flex items-center space-x-2  hover:text-orange-500 group`}
                >
                  <span
                    className={`${
                      activeRoute(children) ? 'bg-orange-500' : 'bg-white'
                    } bg-opacity-50 w-2 h-2  group-hover:bg-orange-500 rounded-full`}
                  ></span>
                  <span>{children.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        }
      </li>
    </>
  );
};

export default Item;
