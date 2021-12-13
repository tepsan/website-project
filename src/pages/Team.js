import { Flex, Heading, Text, Box, Grid } from '@chakra-ui/react';

import { TeamCard } from '../components';

export default function Team() {
  return (
    <Flex
      py="80px"
      px="30px"
      justifyContent="center"
      alignItems="flex-start"
      flex="wrap"
      w="100%"
      minH="100vh"
    >
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={6}
      >
        <TeamCard
          heading="@BEUTREC"
          text="Holding a Doodle allows you to participate in coordinating the Doodles
          Community Treasury."
        />
        <TeamCard
          heading="@TEPSAN"
          text="Holding a Doodle allows you to participate in coordinating the Doodles
          Community Treasury."
        />
        <TeamCard
          heading="@SOVANNPRANIDHK"
          text="Holding a Doodle allows you to participate in coordinating the Doodles
          Community Treasury."
        />
        <TeamCard
          heading="@NAGGER"
          text="Holding a Doodle allows you to participate in coordinating the Doodles
        Community Treasury."
        />
        <TeamCard
          heading="@TEPSAN"
          text="Holding a Doodle allows you to participate in coordinating the Doodles
        Community Treasury."
        />
        <TeamCard
          heading="@SOVANNPRANIDHK"
          text="Holding a Doodle allows you to participate in coordinating the Doodles
        Community Treasury."
        />
      </Grid>
    </Flex>
  );
}
