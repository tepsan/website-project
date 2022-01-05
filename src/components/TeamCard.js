import { Flex, Image, Heading, Text } from '@chakra-ui/react';
export default function TeamCard({heading, text, image}) {
  return (
    <Flex w={{base: '70%', md: '50%', lg: "100%"}} flexDirection="column" alignItems="center" mb="50px">
      <Image src={`${process.env.PUBLIC_URL}/images/${image}`} w="270px" />
      <Heading color="white" mt="1px">
        {heading}
      </Heading>
      <Text color="white" maxW="300px" textAlign="center" mt="3px">
        {text}
      </Text>
    </Flex>
  );
}
