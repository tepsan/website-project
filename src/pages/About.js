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
          A COLLECTION OF 3,000 DOODCATS
        </Heading>
        <Box>
          <Text color="white" mt="20px" fontSize="xl">
            DoodCats is a collectibles NFT project inspired by the two blue-chip
            projects CoolCats and Doodles. DoodCats are created from over 100+
            hand drawn traits. Each DoodCat is unique and will never be the
            same.
          </Text>
          <Text color="white" mt="20px" fontSize="xl">
            The DoodCats public sale will be launched as a stealth drop and will
            be announced primarily in our discord.
          </Text>
          <Text color="white" mt="20px" fontSize="xl">
            Join the DoodCats community on Twitter or Discord to be the first to
            hear about our launch!!
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
