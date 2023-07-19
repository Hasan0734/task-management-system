import { Listbox } from '@headlessui/react';
import { Icon } from '@iconify/react';

import { twMerge } from 'tailwind-merge';

const Option = ({value, icon, className, activeClass, inActiveClass, children}) => {
    return (
        <>
            
            <Listbox.Option
                 className={({ active }) =>
                 `${twMerge(`relative cursor-default select-none py-2 ${icon ? 'pl-10' : 'pl-4'} pr-4` , className)} ${
                   active ? twMerge('bg-indigo-100 text-indigo-900', activeClass) : twMerge('text-gray-900', inActiveClass)
                 }`
               }
                  value={value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                       {children ? children : value.label}
                      </span>
                      {selected && icon ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                          <Icon icon="ic:twotone-check" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
        </>
    );
};

export default Option;