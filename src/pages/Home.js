import React, { useState } from 'react';
import { Box, Flex, Heading, Text, Input } from '@chakra-ui/react';
import lottie from 'lottie-web';

import GoldCat from '../assets/animation/gold_cat.json';
import GradientCat from '../assets/animation/gradient_cat.json';

export default function Home({ data, account, loading, onMint, onMintPresale }) {
  const [count, setCount] = useState(1);
  const { totalSupply, maxSupply, cost, saleActive, presaleActive } = data;
  console.log(data)
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#golden_cat'),
      animationData: GoldCat,
      renderer: 'svg', // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
    lottie.loadAnimation({
      container: document.querySelector('#gradient_cat'),
      animationData: GradientCat,
      renderer: 'svg', // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, []);
  return (
    <Flex
      minH="100vh"
      position="relative"
      flexDirection="column"
      justifyContent={{ base: 'center', md: 'flex-start' }}
      alignItems="center"
    >
      <Box id="golden_cat"></Box>
      <Box id="gradient_cat" className="gradient_cat"></Box>
      <Heading
        textTransform="uppercase"
        color="white"
        fontSize={{ base: '2xl', md: '5xl' }}
      >
        Mint a Rainbow Cat
      </Heading>
      <Text
        px={{ base: '20px', md: 0 }}
        mt={{ base: '20px', md: 0 }}
        textAlign="center"
        color="white"
        fontSize={{ base: 'lg', md: 'xl' }}
      >
        {`${totalSupply}/${maxSupply} Rainbow Cats minted at 0.038 ETH each`}
      </Text>
      <Input
        onChange={e => setCount(e.target.value)}
        type="number"
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
        minW="200px"
        px="20px"
        h="60px"
        fontSize="2xl"
        fontWeight="bold"
        mt="20px"
        color="white"
        textTransform="uppercase"
        disabled={!account || loading || !saleActive}
        onClick={() => {
          if (account && !loading && saleActive) {
            onMint(count, cost);
          }
          if (account && !loading && presaleActive) {
            onMintPresale(count, cost);
          }
        }}
      >
        {saleActive || presaleActive ? 'Mint' : 'Sale/Presale not active'}
      </Box>
    </Flex>
  );
}
