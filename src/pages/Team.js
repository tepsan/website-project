import { Flex, Heading, Text, Box, Grid } from '@chakra-ui/react';

import { TeamCard } from '../components';

export default function Team() {
  return (
    <Flex
      pt="30px"
      pb="80px"
      px="30px"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
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
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={6}
      >
        <TeamCard
          image="DOODCAT-01.png"
          heading="TOFU"
          text="Project Manager. Likes tofu."
        />
        <TeamCard
          image="DOODCAT-02.png"
          heading="VUDA"
          text="Developer. Loves Buddha"
        />
        <TeamCard
          image="DOODCAT-03.png"
          heading="SPRINKLES"
          text="Only eats donut with sprinkles."
        />
        <TeamCard
          image="DOODCAT-04.png"
          heading="POWDER"
          text="Creative director. Likes makeup."
        />
        <TeamCard
          image="DOODCAT-05.png"
          heading="BURPIE"
          text="Developer. Burps constantly."
        />
        <TeamCard
          image="DOODCAT-06.png"
          heading="BowWow"
          text="Artist. Has a cat named Bowie"
        />
      </Grid>
    </Flex>
  );
}
