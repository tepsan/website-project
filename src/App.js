import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  extendTheme
} from '@chakra-ui/react';

import { Headers } from './components';
import { Home, About, Team } from './pages';
import Fonts from './Fonts';

const extendedThemes = extendTheme({
  ...theme,
  fonts: {
    heading: 'Gotham Book',
    body: 'Gotham Book',
  },
  colors: {
    ...theme.colors,
    pinkBtn: '#fb6878',
    yellowBtn: '#f8d859',
  },
});

function App() {
  return (
    <ChakraProvider theme={extendedThemes}>
      <Fonts />
      <Box
        backgroundImage={`${process.env.PUBLIC_URL}/images/bg.png`}
        backgroundPosition="top"
        backgroundSize="cover"
        minH="100vh"
      >
        <Headers />
        <Home />
        <About />
        <Team />
      </Box>
    </ChakraProvider>
  );
}

export default App;
