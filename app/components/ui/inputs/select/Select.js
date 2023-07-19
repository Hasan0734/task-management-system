
import { Listbox, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { Fragment, useState } from 'react';
import { twMerge } from 'tailwind-merge';



const Select = ({ children, value, className, label, labelClass, optionsClass, defaultValue, iconClass, ...attribute }) => {

  const [slValue, setSlValue] = useState();

  console.log(slValue)

  return (
    <>
      <Listbox

        value={slValue}
        onChange={setSlValue}

        // {...attribute}

      >

        {label && (
          <Listbox.Label className={twMerge('input_label', labelClass)}>
            {label}
          </Listbox.Label>
        )}

        <div className="relative mt-1">
          <Listbox.Button
            className={twMerge('select_button', className)}
          >
            <span className="block truncate">{slValue?.label}</span>

            <span className={twMerge('select_button_r_icon', iconClass)}>

              <Icon icon='heroicons:chevron-up-down' width={16} />

            </span>

          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options

              className={twMerge('option_area', optionsClass)}
            >

              {children}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
};

export default Select;