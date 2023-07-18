'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useRef, useState } from 'react'

interface propsType {
  item: {
    id: number
    title: string
    icon: string
    children: {
      id: number
      name: string
      link: string
    }[]
  }
}

const Item = ({ item }: propsType) => {
  const childRef = useRef<HTMLUListElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()

  const checkCurrent = (data: any[]) => {
    const filter = data.filter((dt) => dt.link === pathname)
    return filter.length ? true : false
  }

  const activeRoute = (child: any) => {
    const exist = child.link === pathname
    return exist
  }

  return (
    <>
      <li className=" text-base font-normal " key={item.id}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            checkCurrent(item.children) ? 'text-orange-500' : ' text-white  '
          } py-2 px-2 flex items-center justify-between w-full hover:text-orange-500`}
        >
          <div className="flex items-center space-x-2">
            <Icon
              className="fill-blue-500 stroke-white-500"
              width={20}
              icon={item?.icon}
            />
            <span>{item.title}</span>
          </div>
          {item.children?.length > 0 && (
            <Icon
              className="opacity-50"
              width={20}
              icon={'iconamoon:arrow-down-2-fill'}
            />
          )}
        </button>

        {
          <ul
            style={{
              height:
                item.children?.length  > 0 && isOpen || checkCurrent(item.children)
                  ? `${childRef.current?.scrollHeight}px`
                  : '0px',
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
  )
}

export default Item
