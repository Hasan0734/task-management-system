import React from "react";
import MyPopover from "../ui/MyPopover/MyPopover";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function AccountPopover() {
  return (
    <div>
      <MyPopover
        bodyClass="max-h-[250px] max-w-[300px] overflow-hidden shadow-md p-4"
        buttonClass=""
        panelClass="right-0 mt-3"
        button={
          <img
            className="w-14 h-14 bg-white rounded-full border border-gray-400 p-1"
            src="/assets/avatars/profile_av.png"
            alt=""
          />
        }
      >
        <div className="divide-y">
          <div className="flex items-start gap-3 pb-3">
            <img
              className="w-10 h-10 bg-white rounded-full border border-gray-400 p-1"
              src="/assets/avatars/profile_av.png"
              alt=""
            />
            <div className="">
              <h4 className="text-lg text-gray-600 font-semibold leading-5">
                Jahid Hasan
              </h4>
              <span className="text-sm text-gray-600">Jahid@admin.com</span>
            </div>
          </div>
          <ul className="py-3 space-y-4 px-1">
            <li>
              <Link href={"/"} className="flex items-center gap-5">
                <Icon
                  width={22}
                  icon={"fluent:clipboard-task-list-ltr-20-regular"}
                />
                <span>My Task</span>
              </Link>
            </li>
            <li>
              <Link href={"/"} className="flex items-center gap-5 capitalize">
                <Icon width={22} icon={"fa6-solid:users-line"} />
                <span>Members</span>
              </Link>
            </li>
            <li>
              <Link href={"/"} className="flex items-center gap-5 capitalize">
                <Icon width={22} icon={"ic:baseline-logout"} />
                <span>Signout</span>
              </Link>
            </li>
          </ul>
          <div className="pt-3 px-1">
            <Link href={"/"} className="flex items-center gap-5 capitalize">
              <Icon width={22} icon={"pixelarticons:contact-plus"} />
              <span>Add Personal Account</span>
            </Link>
          </div>
        </div>
      </MyPopover>
    </div>
  );
}
