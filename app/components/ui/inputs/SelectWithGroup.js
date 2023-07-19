import { Listbox, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

const SelectWithGroup = ({
    options,
    label,
    displayValue,
    multiple,
    renderOption,
    isSelected,
    className,
    optionsClass,
    labelClass,
    iconClass,
    activeClass,
    inActiveClass,
    optionClass,
    btnAreaClass,
    value,
    optionPosition,
    icon,
    emptyOption,
    error,
    defaultTitle,
    noneValue,
    groupLabel,
    ...attribute
}) => {

    const newValue = value(options);

    return (
        <Listbox

            value={newValue}
            multiple={multiple}
            {...attribute}
        >
            {label && (
                <Listbox.Label className={twMerge(`input_label ${error ? 'text-red-500' : ''}`, labelClass)}>
                    {label}
                </Listbox.Label>
            )}
            <div className={twMerge('relative mt-2', btnAreaClass)}>
                <Listbox.Button
                    className={twMerge(`select_button ${error ? 'ring-red-300 focus:ring-red-500' : ''}`, className)}
                >
                    {displayValue(newValue)}

                    <span className={twMerge('select_button_r_icon', iconClass)}>
                        <Icon className='bg-white' icon='heroicons:chevron-up-down' width={16} />
                    </span>
                </Listbox.Button>

                <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Listbox.Options
                        className={twMerge(`select_option_area `, `${optionsClass} ${optionPosition === 'top' ? 'bottom-12' : ''}`)}>

                        {emptyOption && <Listbox.Option
                            key={0}
                            className={({ active }) =>
                                `${twMerge(`relative cursor-default select-none py-2 ${icon ? 'pl-10' : 'pl-4'} pr-4`, optionClass)} ${active ? twMerge('bg-indigo-100 text-indigo-900', activeClass) : twMerge('text-gray-900', inActiveClass)
                                }`
                            }
                            value={noneValue}
                        >
                            {({ selected }) =>
                                <>
                                    <span
                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                            }`}
                                    >
                                        {defaultTitle}
                                    </span>

                                    {selected ? (
                                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600'>
                                            <Icon icon='material-symbols:check' />
                                        </span>
                                    ) : null}
                                </>
                            }
                        </Listbox.Option>
                        }

                        {options.map((parentOption, optionIdx) => {
                            return (
                                <>
                                    
                                       {renderOption({parentOption})}
                                 

                                    {/* {!groupLabel && (<Listbox.Option

                                        key={optionIdx + 1}
                                        className={({ active }) =>
                                            `${twMerge(`relative cursor-default select-none py-2 ${icon ? 'pl-10' : 'pl-4'} pr-4`, optionClass)} ${active ? twMerge('bg-indigo-100 text-indigo-900', activeClass) : twMerge('text-gray-900', inActiveClass)
                                            }`
                                        }
                                        value={option}
                                    >
                                        {({ selected }) =>
                                            renderOption({ isSelected, value: newValue, option, selected, icon })
                                        }
                                    </Listbox.Option>)} */}
                                </>
                            );
                        })}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
};

export default SelectWithGroup;
