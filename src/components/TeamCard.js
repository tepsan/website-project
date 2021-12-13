import { Flex, Box, Heading, Text } from '@chakra-ui/react';
export default function TeamCard({heading, text}) {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Box
        bg="gray.300"
        w={{ base: '100px', md: '200px' }}
        h={{ base: '150px', md: '250px' }}
        borderRadius="5px"
        borderWidth="1px"
        borderColor="white"
      ></Box>
      <Heading color="white" mt="20px">
        {heading}
      </Heading>
      <Text color="white" maxW="300px" textAlign="center" mt="10px">
        {text}
      </Text>
    </Flex>
  );
}
