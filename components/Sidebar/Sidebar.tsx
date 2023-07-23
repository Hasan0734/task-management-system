
import { sidebar } from '@/utils/data';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Item from './Item';

interface propsType {
  setToggle: (arg: boolean) => void;
  toggle: boolean;
}

function Sidebar({ toggle, setToggle }: propsType) {
  const [collapse, setCollapse] = useState(false);

  return (
    <div
      className={`absolute xl:relative ${
        toggle ? 'left-0' : '-left-[500px]'
      } xl:-left-0 z-10 ${
        collapse ? 'w-[130px]' : 'w-[250px] md:w-[315px]'
      } xl:pl-6 xl:py-6 h-full transition-all duration-300`}
    >
      <div
        className={`flex flex-col w-full bg-primary h-full overflow-hidden transition-all duration-300 ${
          collapse ? 'xl:rounded-2xl p-3' : 'xl:rounded-3xl p-5'
        } `}
      >
        <div
          className={`flex items-center gap-3 justify-center mt-10 flex-shrink-0 ${
            collapse ? 'flex-col' : 'flex-row'
          } transition-all duration-300 `}
        >
          <div
            className={`p-3 xl:p-4 rounded-full bg-white flex items-center justify-center`}
          >
            <Icon
              icon="solar:clipboard-check-linear"
              width={collapse ? 30 : 40}
            />
          </div>
          <h3
            className={`${
              collapse ? 'text-lg' : 'text-xl md:text-3xl'
            } text-white font-bold`}
          >
            My-Task
          </h3>
        </div>
        <ul
          className={`flex-grow flex-shrink mt-10 space-y-3 overflow-x-hidden transition-all duration-300 ${
            collapse ? 'overflow-y-auto' : 'overflow-y-scroll scrollbar'
          }  
          scrollbar-thumb-orange-500 scrollbar-track-transparent scrollbar-thumb-rounded-md scrollbar-w-1.5`}
        >
          {sidebar.map((item, i) => (
            <Item key={i} item={item} collapse={collapse} />
          ))}
        </ul>
        <div className="flex-shrink-0 flex justify-center pt-8 pb-6">
          <button
            onClick={() => {
              setCollapse(!collapse);
              if (!collapse) {
                setToggle(false);
              }
            }}
            className="flex items-center justify-center text-center p-2
             relative before:absolute before:w-full before:h-[3px]
              before:rounded-full before:bg-white before:-bottom-0"
          >
            {collapse ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <g
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                >
                  <path d="M34 24.0083H6" />
                  <path d="M22 12L34 24L22 36" />
                  <path d="M42 12V36" />
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <g
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                >
                  <path d="M14 23.9917H42" />
                  <path d="M26 36L14 24L26 12" />
                  <path d="M5 36V12" />
                </g>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
