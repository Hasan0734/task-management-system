import React from 'react';
import { twMerge } from 'tailwind-merge';

const CheckBox = (props:any) => {

  const { label, name, containerClass, wrapClass, labelClass, bodyClass,
    className,...attribute } = props;
    
  return (
    <>
      <div className={twMerge('my-4', bodyClass)}>
        <div className={twMerge('space-y-4', wrapClass)}>
          <div className={twMerge('flex items-center', containerClass)}>
            <input
              id={label}
              name={name}
              type='checkbox'
              {...attribute}
              className={twMerge('checkbox_default', className)}
            />

            {label && <label
              htmlFor={label}
              className={twMerge('checkbox_label', labelClass)}
            >
              {label}
            </label>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckBox;
