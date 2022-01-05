import { Flex, Heading, Text, Box, Grid } from '@chakra-ui/react';

import { TeamCard } from '../components';

export default function Team() {
  return (
    <Flex
      pt={{ base: '80px', lg: '30px' }}
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
        FACE OF THE PROJECT
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
          image="team.svg"
          heading="ARCHIE"
          text="PROJECT MANAGER
"
        />
      </Flex>

      <Text textAlign="center" maxW="800px"  color="white">
        Text below can be: More information regarding the roadmap and the
        history of Rainbow Cats can be found in the discord✨🌈
      </Text>
    </Flex>
  );
}
