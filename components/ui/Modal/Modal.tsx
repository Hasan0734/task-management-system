import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { Fragment, useState } from "react";
import { twMerge } from "tailwind-merge";

interface PropsType {
  open: boolean;
  onClose: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  panelClass: string;
  closeIcon: boolean;
  titleClass: string;
  headerClass: string
}

export default function Modal({
  open,
  onClose,
  title,
  children,
  panelClass,
  closeIcon,
  titleClass,
  headerClass
}: PropsType) {
  const closeModal = () => {
    onClose(false);
  };

  const defaultClass = twMerge(
    "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
    panelClass
  );
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 "
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={defaultClass}>
                  <div className={twMerge('flex items-center justify-between', headerClass)}>
                    <Dialog.Title
                      as="h3"
                      className={twMerge('text-lg font-medium leading-6 text-gray-900', titleClass)}
                    >
                      {title}
                    </Dialog.Title>
                    {closeIcon && (
                      <div>
                        <button>
                          <Icon icon={"ph:x"} width={23} />
                        </button>
                      </div>
                    )}
                  </div>

                  {children}
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
