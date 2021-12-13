import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import Lottie from 'lottie-react';

import NyanCat from '../assets/animation/nyan_cat.json';

export default function About() {
  return (
    <Flex
      position="relative"
      minH="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        className="gradient_cat"
        w={{ base: '200px', md: '300px', lg: '450px' }}
      >
        <Lottie animationData={NyanCat} />
      </Box>
      <Box
        maxW={{ base: '100%', md: '70%', lg: '50%' }}
        ml={{ base: '0', lg: '30px' }}
        px={{ base: '20px', lg: 0 }}
      >
        <Heading color="white" fontSize={{ base: '2xl', md: '4xl' }}>
          A COLLECTION of 10,000 DOOD CATS
        </Heading>
        <Box>
          <Text color="white" mt="20px" fontSize="lg">
            Doodles is a community-driven collectibles NFT project. Doodle NFTs
            are made up with over a hundred exciting traits of faces, hair,
            hats, body and backgrounds. Each Doodle is a unique, non-fungible
            token (NFT) on the Ethereum blockchain.
          </Text>
          <Text color="white" mt="20px" fontSize="lg">
            Holding a Doodle allows you to participate in coordinating the
            Doodles Community Treasury. This Treasury will be seeded with 420
            ETH after the public sale ends! Holders can vote for experiences,
            activations and campaigns that benefit the Doodles.
          </Text>
          <Text color="white" mt="20px" fontSize="lg">
            The road map for Doodles is collaborative and will be decided by
            Doodle holders. With imaginative ideas, adequate resources and
            coordination, we believe we can bring Doodles to every vertical of
            popular culture!
          </Text>
          <Text color="white" mt="20px" fontSize="lg">
            The Doodles public sales opens on Sunday, October 17th around 7pm
            PDT.
          </Text>
          <Text color="white" mt="20px" fontSize="lg">
            Join the Doodles community on Twitter or Discord!
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
