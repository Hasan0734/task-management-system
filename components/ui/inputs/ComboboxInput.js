import { Combobox } from '@headlessui/react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const ComboboxInput = ({setQuery, displayValue, placeholder, className}) => {
    return (
        <>
            <Combobox.Input
                className={twMerge('combobox_input', className)}
                onChange={(event) => setQuery(event.target.value)}
                displayValue={displayValue}
                placeholder={placeholder}
            />
        </>
    );
};

export default ComboboxInput;