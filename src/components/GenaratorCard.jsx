import { useState, useEffect } from 'react';
import {
    Box,
    HStack,
    VStack,
    Button,
    Heading,
    Text,
    InputRightElement,
    IconButton,
    useColorModeValue,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    useDisclosure,
    SlideFade,
} from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

import SwitchField from './SwitchField';
import InputField from './InputField';
import NumberInputField from './NumberInputField';

import { passwordGenerator, noop } from '../services';

const GenaratorCard = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();

    const [mounted, setMounted] = useState(false);
    const [copyInfo, setCopyInfo] = useState('');
    const [password, setPassword] = useState('');
    const [options, setOptions] = useState({
        length: 16,
        spacing: 6,
        includeUppercaseLetters: true,
        includeLowercaseLetters: true,
        includeNumbers: true,
        includeSymbols: false,
    });

    const onOptionsChange = (name) => setOptions((prev) => ({ ...prev, [name]: !options[name] }));

    const onGeneratePassword = () => {
        const currentPassword = passwordGenerator({
            ...options,
            len: Number(options.length),
            spacing: Number(options.spacing),
        });
        setPassword(currentPassword);
    };

    const onCopyPassword = () => {
        navigator.clipboard.writeText(password);

        setCopyInfo('Copied!');
        setTimeout(onClose, 2000);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <SlideFade in={mounted}>
            <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
                <VStack mb={6}>
                    <Heading fontSize={{ base: '3xl', md: '4xl' }} textAlign="center">
                        Password Generator
                    </Heading>

                    <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
                        supercharge your passwords 🐱‍👤
                    </Text>
                </VStack>

                <VStack spacing={6}>
                    <InputField
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={noop}
                        isReadOnly={true}
                        rightElement={
                            <InputRightElement
                                children={
                                    <Popover placement="top" trigger="click" isOpen={isOpen} onOpen={onOpen}>
                                        <PopoverTrigger>
                                            <IconButton
                                                icon={<CopyIcon />}
                                                aria-label="Copy"
                                                mt={2}
                                                mr={2}
                                                variant="ghost"
                                                colorScheme="green"
                                                onClick={onCopyPassword}
                                                isDisabled={!password}
                                            />
                                        </PopoverTrigger>

                                        <PopoverContent
                                            bg={useColorModeValue('gray.600', 'gray.400')}
                                            borderColor={useColorModeValue('gray.600', 'gray.400')}
                                            color={useColorModeValue('white', 'gray.900')}
                                            w="auto"
                                            px={1.5}
                                            py={0.5}
                                            fontSize="xs"
                                        >
                                            <PopoverArrow bg={useColorModeValue('gray.600', 'gray.400')} />

                                            {copyInfo}
                                        </PopoverContent>
                                    </Popover>
                                }
                            />
                        }
                    />

                    <HStack spacing={4}>
                        <NumberInputField
                            id="length"
                            label="Length"
                            value={options.length}
                            onChange={(length) => setOptions((prev) => ({ ...prev, length }))}
                            size="md"
                            display="flex"
                            step={2}
                            min={1}
                            maxW={40}
                            alignItems="center"
                        />

                        <NumberInputField
                            id="spacing"
                            label="Spacing"
                            value={options.spacing}
                            onChange={(spacing) => setOptions((prev) => ({ ...prev, spacing }))}
                            size="md"
                            isInvalid={Number(options.length) < Number(options.spacing)}
                            step={2}
                            min={0}
                            clampValueOnBlur={false}
                            maxW={40}
                            display="flex"
                            alignItems="center"
                        />
                    </HStack>

                    <SwitchField
                        id="includeUppercaseLetters"
                        label="Include Uppercase Letters"
                        value={options.includeUppercaseLetters}
                        onChange={() => onOptionsChange('includeUppercaseLetters')}
                    />

                    <SwitchField
                        id="includeLowercaseLetters"
                        label="Include Lowercase Letters"
                        value={options.includeLowercaseLetters}
                        onChange={() => onOptionsChange('includeLowercaseLetters')}
                    />

                    <SwitchField
                        id="includeNumbers"
                        label="Include Numbers"
                        value={options.includeNumbers}
                        onChange={() => onOptionsChange('includeNumbers')}
                    />

                    <SwitchField
                        id="includeSymbols"
                        label="Include Symbols"
                        value={options.includeSymbols}
                        onChange={() => onOptionsChange('includeSymbols')}
                    />

                    <Button w="100%" colorScheme="green" onClick={onGeneratePassword}>
                        Generate Password
                    </Button>
                </VStack>
            </Box>
        </SlideFade>
    );
};

export default GenaratorCard;
