import React from 'react';
import { FormControl, FormLabel, Input, InputGroup } from '@chakra-ui/react';

const InputField = ({
    id,
    label,
    value,
    onChange,
    type = 'text',
    placeholder,
    size = 'lg',
    focusBorderColor = 'green.400',
    isReadOnly = false,
    rightElement,
    ...props
}) => {
    return (
        <FormControl {...props}>
            <FormLabel htmlFor={id}>{label}</FormLabel>

            <InputGroup>
                <Input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    focusBorderColor={focusBorderColor}
                    value={value}
                    onChange={onChange}
                    size={size}
                    isReadOnly={isReadOnly}
                />

                {rightElement}
            </InputGroup>
        </FormControl>
    );
};

export default InputField;
