import { Icon } from "@iconify/react/dist/iconify.js";
import MenuDropdown from "../ui/MenuDropdown/MenuDropdown";
import { Menu } from "@headlessui/react";
import React, { useRef, useState } from "react";
import { usePopper } from "react-popper";

export default function InviteCard({ invite}: any) {
  const referenceElement: any = useRef();
  const popperElement: any = useRef();
  const arrowElement: any = useRef();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });
  return (
    <>
      <li className="flex items-center justify-between bg-white p-3 rounded-lg">
        <div className="flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-full"
            src={invite.image}
            alt="avatar"
          />

          <div>
            <h5 className="text-base font-semibold text-gray-600">
              {invite.name}
            </h5>
            <span className="text-gray-600">{invite.email}</span>
          </div>
        </div>

        <div className="flex items-center gap-10">
          {invite.role === "members" && (
            <div className="flex items-center gap-1">
              <p className="text-sm">Members</p>
              <MenuDropdown
                buttonClass="p-2"
                bodyClass={` p-1 z-10 mt-0`}
                button={
                  <Icon
                    className="mt-1 text-primary/80"
                    icon="iconamoon:arrow-down-2-fill"
                    width={23}
                  />
                }
              >
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      All operations permissions
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Only Invite & manage team
                    </button>
                  )}
                </Menu.Item>
              </MenuDropdown>
            </div>
          )}
          <div className="flex items-center gap-1">
            {invite.role === "admin" && <p className="text-sm">Admin</p>}
            <MenuDropdown
              buttonClass="p-2"
              bodyClass={` w-44 p-1 z-10 mt-0`}
              button={
                <Icon
                  className="mt-1 text-primary/80"
                  icon="iconamoon:arrow-down-2-fill"
                  width={23}
                />
              }
            >
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Reset Password
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Activity Report
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Suspend member
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Delete member
                  </button>
                )}
              </Menu.Item>
            </MenuDropdown>
          </div>
        </div>
      </li>
    </>
  );
}
