import React from 'react';
import { twMerge } from 'tailwind-merge';

const InputWithProps = ({
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
  inputProps,
  ...attribute
}) => {

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
        <div className={twMerge('relative mt-2 rounded-md shadow-sm', outsideClass )}>
           
           {inputProps.startAdornment}
            
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
              {inputProps.endtAdornment}
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

export default InputWithProps;
