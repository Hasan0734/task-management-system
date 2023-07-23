import React from 'react';
import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { twMerge } from 'tailwind-merge';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AutoComplete = ({
  label,
  options,
  renderOption,
  renderInput,
  filterList,
  clearable,
  handleClear,
  value,
  optionsClass,
  className,
  ...attribute
}) => {
  const [query, setQuery] = useState('');

  const filterData = filterList(query, options);

  const newValue = value(options);




  return (
    <>
      <Combobox value={newValue} as='div' {...attribute}>
        {label && (
          <Combobox.Label className='block text-sm font-medium leading-6 text-gray-900'>
            {label}
          </Combobox.Label>
        )}
        <div className='relative mt-2'>
          {renderInput(setQuery)}
          {clearable && newValue && (
            <button
              type='button'
              onClick={handleClear}
              className='absolute inset-y-0 right-5 flex items-center
           rounded-r-md px-2 focus:outline-none'
            >
              <Icon icon={'ph:x-light'} />
            </button>
          )}
          <Combobox.Button
          type="button"
            className={twMerge('absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none', '')}
         
          >
            <Icon icon='heroicons:chevron-up-down' />
          </Combobox.Button>

          {filterData.length > 0 && (
            <Combobox.Options
              className={twMerge('absolute z-10 mt-1 max-h-56 w-full overflow-auto  rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black  outline-none  sm:text-sm', optionsClass)}
             
            >
              {filterData.map((option, index) => (
                <Combobox.Option
                  key={index}
                  value={option}
                  className={({ active }) =>
                    classNames(
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                    )
                  }
                >
                  {({ active, selected }) =>
                    renderOption(option, selected, active)
                  }
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
    </>
  );
};

export default AutoComplete;
