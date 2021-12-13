import React, { useState } from 'react';
import { Box, Flex, Heading, Text, Input } from '@chakra-ui/react';
import Lottie from 'lottie-react';

import GoldCat from '../assets/animation/gold_cat.json';
import GradientCat from '../assets/animation/gradient_cat.json';

export default function Home() {
  const [count, setCount] = useState(1);
  return (
    <Flex
      minH="100vh"
      position="relative"
      flexDirection="column"
      alignItems="center"
    >
      <Box className="gradient_cat">
        <Lottie animationData={GradientCat} />
      </Box>
      <Box maxW={{ base: '200px', md: '350px', lg: '500px' }}>
        <Lottie animationData={GoldCat} />
      </Box>
      <Heading
        textTransform="uppercase"
        color="white"
        fontSize={{ base: '2xl', md: '5xl' }}
      >
        Mint a Dood Cat
      </Heading>
      <Text px={{base: '20px', md: 0}} mt={{base: '20px', md: 0}} textAlign="center" color="white" fontSize={{ base: 'lg', md: 'xl' }}>
        10000/10000 DOOD CATS left at 0.069 ETH each
      </Text>
      <Input
        onChange={() => setCount(count + 1)}
        text="number"
        name="count"
        bg="white"
        w="200px"
        h="60px"
        color="black"
        fontSize="2xl"
        fontWeight="bold"
        mt="30px"
        value={count}
        textAlign="center"
        borderRadius="20px"
        minLength="1"
        min="1"
      />
      <Box
        as="button"
        bg="yellowBtn"
        borderRadius="20px"
        w="200px"
        h="60px"
        fontSize="2xl"
        fontWeight="bold"
        mt="20px"
        color="white"
        textTransform="uppercase"
      >
        Mint
      </Box>
    </Flex>
  );
}
