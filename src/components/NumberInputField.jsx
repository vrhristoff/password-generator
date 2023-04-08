import React from 'react';
import {
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';

const InputField = ({
    id,
    label,
    value,
    onChange,
    placeholder,
    size = 'lg',
    focusBorderColor = 'green.400',
    isReadOnly = false,
    step = 2,
    min,
    max,
    clampValueOnBlur = true,
    ...props
}) => {
    return (
        <FormControl {...props}>
            <FormLabel htmlFor={id}>{label}</FormLabel>

            <NumberInput
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                size={size}
                isReadOnly={isReadOnly}
                min={min}
                max={max}
                step={step}
                clampValueOnBlur={clampValueOnBlur}
            >
                <NumberInputField focusBorderColor={focusBorderColor} />

                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </FormControl>
    );
};

export default InputField;
