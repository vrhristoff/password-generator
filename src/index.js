import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';

import App from './App';
import theme from './theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </StrictMode>
);
