import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import lottie from 'lottie-web';

import Nyan from '../assets/animation/nyan_cat.json';

export default function About() {
     React.useEffect(() => {
       lottie.loadAnimation({
         container: document.querySelector('#nyan_cat'),
         animationData: Nyan,
         renderer: 'svg', // "canvas", "html"
         loop: true, // boolean
         autoplay: true, // boolean
       });
     }, []);
  return (
    <Flex
      position="relative"
      minH="100vh"
      flexDirection="column"
      justifyContent={{ base: 'flex-start', md: 'center' }}
      alignItems="center"
      pt={{ base: '50px', lg: 0 }}
    >
      <Box id="nyan_cat" className="gradient_cat about"></Box>
      <Box
        maxW={{ base: '100%', md: '70%', lg: '50%' }}
        ml={{ base: '0', lg: 'auto' }}
        mr={{ base: '0', md: '10%', lg: '20%' }}
        px={{ base: '20px', lg: 0 }}
      >
        <Heading color="white" fontSize={{ base: '2xl', md: '4xl' }}>
        A COLLECTION OF 5,000 RAINBOW CATSS
        </Heading>
        <Box>
          <Text color="white" mt="20px" fontSize="xl">
          Rainbow cats are set to launch in the first weekend of 2022! First 1,000 cats will be minted for free! (just pay gas). The remaining 4,000 will be available to mint at 0.038E per cat with the maximum of 5 mints per wallet.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
