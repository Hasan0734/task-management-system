import React from "react";
import MyPopover from "../ui/MyPopover/MyPopover";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { notifications } from "@/utils/data";

export default function NotificationPopover() {
  return (
    <div className="relative flex w-8 h-8 items-center justify-center">
      <span
        className="animate-ping duration-500 delay-300 z-0 
    absolute inline-flex h-full w-full rounded-full bg-gray-300"
      ></span>
      <MyPopover
        bodyClass="max-h-[450px] overflow-hidden"
        buttonClass=""
        panelClass=""
        button={<Icon className="text-primary" icon="mdi:bell" width={25} />}
      >
        <div className="flex flex-col">
          <div className="flex-shrink-0 bg-primary py-3 flex items-center justify-between px-4 text-white text-lg font-medium">
            <h3 className="">Notifications</h3>
            <h3>13</h3>
          </div>

          <ul
            className="p-4 h-[350px] divide-y overflow-y-scroll scrollbar
           scrollbar-thumb-orange-500 scrollbar-track-transparent scrollbar-thumb-rounded-md scrollbar-w-1.5"
          >
            {notifications.map((notification) => (
              <li key={notification.id} className="py-3">
                <Link href={"/"} className="group flex gap-3 ">
                  <div>
                    {notification.user.avatar ? (
                      <img
                        className="w-10 h-10 rounded-full bg-white text-center flex items-center justify-center"
                        src={notification.user.avatar}
                        alt="avatar"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full p-1 bg-gray-200 text-center flex items-center justify-center">
                        <span className="font-semibold text-gray-600 group-hover:text-secondary">
                          JH
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex-grow flex-shrink">
                    <div>
                      <div className="text-gray-600 flex items-center justify-between">
                        <h3 className="font-semibold group-hover:text-secondary">
                          {notification.user.firstName}{" "}
                          {notification.user.lastName}
                        </h3>
                        <span className="block text-sm group-hover:text-secondary">
                          2MIN
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 group-hover:text-secondary mr-8">
                        {notification.title}
                      </p>
                      {notification?.category && (
                        <button className="text-xs bg-green-600 px-2 py-[2px] text-white rounded">
                          {notification.category}
                        </button>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="bg-gray-100 px-4 py-2 text-center flex-shrink-0">
            <Link
              href={"/"}
              className="hover:text-secondary text-sm text-gray-600"
            >
              View all notifications
            </Link>
          </div>
        </div>
      </MyPopover>
    </div>
  );
}
