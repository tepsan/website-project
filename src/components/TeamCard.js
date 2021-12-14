import { Flex, Image, Heading, Text } from '@chakra-ui/react';
export default function TeamCard({heading, text, image}) {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Image src={`${process.env.PUBLIC_URL}/images/${image}`} />
      <Heading color="white" mt="10px">
        {heading}
      </Heading>
      <Text color="white" maxW="300px" textAlign="center" mt="10px">
        {text}
      </Text>
    </Flex>
  );
}
