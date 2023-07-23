import React from 'react';
import { twMerge } from 'tailwind-merge';

const Radio = (props) => {


  const { label, name, containerClass, wrapClass, labelClass, className, ...attribute } = props;

  return (
    <>
      <div className='mt-4'>
        <div className={twMerge('space-y-4', wrapClass)}>
          <div className={twMerge('flex items-center', containerClass)}>
            <input
              id={label}
              name={name}
              type='radio'
              {...attribute}
              className={twMerge('checkbox_default', className)}
            />
            <label
              htmlFor={label}
              className={twMerge('checkbox_label', labelClass)}
            >
              {label}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Radio;