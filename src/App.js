import { Flex, useColorModeValue } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';

import GenaratorCard from './components/GenaratorCard';

const App = () => {
    const bg = useColorModeValue('gray.50', 'gray.800');

    return (
        <Flex minH="100vh" p={4} direction="column" bg={bg}>
            <Flex justifyContent="flex-end">
                <ColorModeSwitcher mr={1} />
            </Flex>

            <Flex mt={4} align="center" justify="center" bg={bg}>
                <GenaratorCard />
            </Flex>
        </Flex>
    );
};

export default App;
