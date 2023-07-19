import React from 'react';
import { twMerge } from 'tailwind-merge';

const TextField = ({
  label,
  name,
  InputProps,
  error,
  containerClass,
  labelClass,
  className,
  errMessage,
  errorClass,
  outsideClass,
  ...attribute
}:any) => {

  return (
    <>
      <div className={twMerge('', containerClass)}>
        {label && (
          <label
            htmlFor={name}
            className={`${twMerge('input_label', labelClass)} ${
              error ? 'text-red-500' : ''
            }`}
          >
            {label}
          </label>
        )}
        <div className={twMerge('relative mt-1 rounded-md shadow-sm', outsideClass )}>
          <input
            id={name}
            name={name}
            {...attribute}
            className={`${twMerge('input_default', className)} ${
                 error
                   ? 'ring-red-300 focus:ring-red-500'
                   : ''
               }`}
            
          />
        </div>

        {error && errMessage  && (
          <p className={twMerge('error_message', errorClass)}>
            {error}
          </p>
        )}
      </div>
    </>
  );
};

export default TextField;
