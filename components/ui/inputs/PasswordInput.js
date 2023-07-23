// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';

import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Icon } from '@iconify/react';
import { twMerge } from 'tailwind-merge';

const PasswordInput = ({
  label,
  name,
  placeholder,
  error,
  showPassword,
  handleShowPassword,
  required,
  containerClass,
  labelClass,
  className,
  errMessage,
  errorClass,
  ...attribute
}) => {

  return (
    <>
      <div className={twMerge('', containerClass)}>
        {label && (
          <label
            htmlFor={name}
            className={`${twMerge('input_label', labelClass)} ${error ? 'text-red-500' : ''
              }`}
          >
            {label} 
          </label>
        )}
        <div className='relative mt-2 rounded-md shadow-sm'>
          <input
            id={name}
            name={name}
            className={`${twMerge('input_default', className)} ${error
                ? 'ring-red-400 focus:ring-red-500'
                : ''
              } `}
            placeholder={placeholder}
            {...attribute}
          />
          <div
            onClick={handleShowPassword}
            className='cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3'
          >
            <Icon icon={showPassword ? eyeFill : eyeOffFill} />

          </div>
        </div>
        {error && errMessage && (
          <p className={twMerge('error_message', errorClass)}>
            {error}
          </p>
        )}
      </div>
    </>
  );
};

export default PasswordInput;
