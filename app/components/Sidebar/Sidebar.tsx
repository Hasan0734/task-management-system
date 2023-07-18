'use client'
import { sidebar } from '@/utils/data'
import React from 'react'
import { Icon } from '@iconify/react'
import Item from './Item'

function Sidebar() {
  return (
    <div className="absolute md:relative w-[250px] md:w-[315px] md:pl-6 md:py-6 h-full">
      <div className="flex flex-col w-full bg-primary h-full overflow-hidden md:rounded-3xl p-5 ">
        <div className="flex items-center gap-3 justify-center mt-10 flex-shrink-0">
          <div className="p-3 md:p-4 rounded-full bg-white flex items-center justify-center">
            <Icon icon="solar:clipboard-check-linear" width={40} />
          </div>
          <h3 className="text-xl md:text-3xl text-white font-bold">My-Task</h3>
        </div>
        <ul
          className="flex-grow flex-shrink mt-10 space-y-3 overflow-y-scroll scrollbar
               scrollbar-thumb-orange-500 scrollbar-track-transparent scrollbar-thumb-rounded-md scrollbar-w-1.5"
        >
          {sidebar.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
        <div className="flex-shrink-0 pt-8 pb-6">
          <button className="w-full flex items-center justify-center text-center">
            <Icon
              className="text-white"
              icon={'material-symbols:logout'}
              width={24}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
