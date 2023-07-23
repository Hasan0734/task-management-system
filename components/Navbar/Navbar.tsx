import React from 'react';
import TextField from '../ui/inputs/TextField';
import { Icon } from '@iconify/react';
import Link from 'next/link';

interface propsType {
  setToggle: (arg: boolean) => void;
  toggle: boolean;
}

const employees = [
  { id: 1, avatar: '/assets/avatars/avatar3.jpg' },
  { id: 2, avatar: '/assets/avatars/avatar4.jpg' },
  { id: 3, avatar: '/assets/avatars/avatar7.jpg' },
  { id: 4, avatar: '/assets/avatars/avatar8.jpg' },
];

export default function Navbar({ setToggle, toggle }: propsType) {
  return (
    <nav className="w-full g flex lg:items-center flex-col lg:flex-row gap-6 md:gap-4 xl:gap-6 lg:justify-between py-6">
      <form className="flex items-center flex-grow xl:w-4/6">
        <button className="p-[15px] bg-gray-200 rounded-l">
          <Icon icon="ic:baseline-search" width={20} />
        </button>
        <TextField
          placeholder="Search"
          name="search"
          labelClass="text-white"
          className="py-2.5 text-xl  bg-gray-200 rounded-l-none rounded-r border border-gray-200 focus:border-black focus:shadow-md"
          outsideClass="mt-0 shadow-none "
          containerClass="w-full lg:w-3/4"
        />
      </form>
      <div className="flex items-center justify-between gap-5">
        <div className='flex items-center gap-5'>
          <div className="flex items-center gap-6">
            <Link href={'/'}>
              <Icon
                className="text-primary"
                icon={'bxs:info-square'}
                width={20}
              />
            </Link>
            <ul className="hidden xs:flex -space-x-4">
              {employees.map((employee) => (
                <li key={employee.id} className="">
                  <img
                    className="w-9 h-9 rounded-full  border-2 border-white"
                    src={employee.avatar}
                  />
                </li>
              ))}
              <li className="">
                <button className="w-9 h-9 rounded-full bg-primary  border-2 border-white flex items-center justify-center">
                  <Icon
                    width={28}
                    className="text-secondary stroke-[4px]"
                    icon={'ic:baseline-plus'}
                  />
                </button>
              </li>
            </ul>
          </div>
          <div className="relative flex">
            <span
              className="animate-ping duration-500 delay-300 z-0 
          absolute inline-flex h-full w-full rounded-full bg-gray-300"
            ></span>
            <button className="z-10">
              <Icon className="text-primary" icon="mdi:bell" width={25} />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="space-y-0">
              <h3 className="text-base font-bold text-gray-600">Jhon Week</h3>
              <span className="text-sm text-gray-600 block">Admin Profile</span>
            </div>
            <div>
              <button>
                <img
                  className="w-14 h-14 bg-white rounded-full border border-gray-400 p-1"
                  src="/assets/avatars/profile_av.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <div className="block xl:hidden">
          <button onClick={() => setToggle(!toggle)}>
            <Icon width={25} icon={'fa-solid:bars'} />
          </button>
        </div>
      </div>
    </nav>
  );
}
