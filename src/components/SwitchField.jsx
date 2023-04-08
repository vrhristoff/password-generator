import React from 'react';
import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

const SwitchField = ({ id, label, value, onChange, colorScheme = 'green' }) => {
    return (
        <FormControl display="flex" alignItems="center" justifyContent="space-between">
            <FormLabel htmlFor={id} mb={0}>
                {label}
            </FormLabel>

            <Switch id={id} isChecked={value} onChange={onChange} colorScheme={colorScheme} />
        </FormControl>
    );
};

export default SwitchField;
