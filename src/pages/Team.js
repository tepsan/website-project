import { Flex, Heading, Text, Box, Grid } from '@chakra-ui/react';

import { TeamCard } from '../components';

export default function Team() {
  return (
    <Flex
      pt={{ base: '50px', lg: '30px' }}
      pb="80px"
      px="30px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flex="wrap"
      w="100%"
      minH="100vh"
    >
      <Heading
        fontSize={{ base: '4xl', lg: '6xl' }}
        color="white"
        textAlign="center"
        w="100%"
        mb="50px"
      >
        DOODCAT CREATORS
      </Heading>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        // templateColumns={{
        //   base: 'repeat(1, 1fr)',
        //   md: 'repeat(2, 1fr)',
        //   lg: 'repeat(3, 1fr)',
        // }}
        // justifyContent="space-between"
        // gap={6}
      >
        <TeamCard
          image="DOODCAT-01.svg"
          heading="TOFU"
          text="Project Manager. Likes tofu."
        />
        <TeamCard
          image="DOODCAT-02.svg"
          heading="VUDA"
          text="Developer. Loves Buddha"
        />
        <TeamCard
          image="DOODCAT-03.svg"
          heading="SPRINKLES"
          text="Only eats donut with sprinkles."
        />
        <TeamCard
          image="DOODCAT-04.svg"
          heading="POWDER"
          text="Creative director. Likes makeup."
        />
        <TeamCard
          image="DOODCAT-05.svg"
          heading="BURPIE"
          text="Developer. Burps constantly."
        />
        <TeamCard
          image="DOODCAT-06.svg"
          heading="BowWow"
          text="Artist. Has a cat named Bowie"
        />
      </Flex>
    </Flex>
  );
}
