import { twMerge } from 'tailwind-merge';

const TextArea = ({
  label,
  name,
  error,
  containerClass,
  labelClass,
  className,
  errMessage,
  errorClass,
  commentRef,
  ...attribute
}) => {
  return (
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

      <div className='mt-2'>
        <textarea
          ref={commentRef}
          name={name}
          id={name}
          className={`${twMerge('input_default resize-none', className)} ${error
            ? 'ring-red-300 focus:ring-red-500'
            : ''
            }`}

          {...attribute}

        />
      </div>
      {error && errMessage && (
        <p className={twMerge('error_message', errorClass)}>
          {error}
        </p>
      )}
    </div>
  );
};

export default TextArea;
