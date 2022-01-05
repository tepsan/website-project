import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';

import {
  Flex,
  Link,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Box,
  Text,
} from '@chakra-ui/react';

export default function Headers({ onConnect, account }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState('right');
  const formatAddress = str => {
    return str ? str.slice(0, 5) + '...' + str.slice(str.length - 5) : '';
  };
  return (
    <Flex
      px={{ base: '10px', md: '15px', lg: '20px', xl: '50px' }}
      py="20px"
      justifyContent={{ base: 'center', lg: 'space-between' }}
      alignItems="center"
    >
      <Image
        src={`${process.env.PUBLIC_URL}/Rainbowcats.svg`}
        w={{ base: '150px', md: '200px', lg: '300px' }}
      />
      <Flex className="desktop-only">
        <Link
          mr="50px"
          color="white"
          fontSize="2xl"
          textTransform="uppercase"
          href=""
          isExternal
        >
          Opensea
        </Link>
        <Link
          mr="50px"
          color="white"
          fontSize="2xl"
          textTransform="uppercase"
          href="https://discord.gg/8y4qyCkDkH"
          isExternal
        >
          Discord
        </Link>
        <Link
          mr="50px"
          color="white"
          fontSize="2xl"
          textTransform="uppercase"
          href="https://twitter.com/RainbowCatsNFT"
          isExternal
        >
          Twitter
        </Link>
      </Flex>
      <Flex alignItems="center">
        {!account ? (
          <Flex
            justifyContent="center"
            alignItems="center"
            color="white"
            fontWeight="bold"
            as="button"
            w="200px"
            bg="pinkBtn"
            borderWidth="1px"
            h="50px"
            borderColor="white"
            borderRadius="25px"
            mr="10px"
            className="desktop-only"
            onClick={onConnect}
          >
            Connect Wallet
          </Flex>
        ) : (
          <Text color="white" className="desktop-only">
            {formatAddress(account)}
          </Text>
        )}
        <Box
          as="button"
          p="2"
          onClick={onOpen}
          display={{ base: 'block', md: 'none' }}
          position="absolute"
          right="10px"
          className="mobile-only"
        >
          <HiMenu color="white" size="40" />
        </Box>
      </Flex>
      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        display={{ base: 'block', md: 'none' }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Link
              mr="50px"
              color="black"
              fontSize="2xl"
              textTransform="uppercase"
              display="block"
              mb="20px"
              href="https://opensea.io/collection/doodcats"
              isExternal
            >
              Opensea
            </Link>
            <Link
              mr="50px"
              color="black"
              fontSize="2xl"
              textTransform="uppercase"
              display="block"
              mb="20px"
              href="https://discord.gg/jh3RM6btQu"
              isExternal
            >
              Discord
            </Link>
            <Link
              mr="50px"
              color="black"
              fontSize="2xl"
              textTransform="uppercase"
              display="block"
              mb="20px"
              href="https://twitter.com/DoodCatsNFT"
              isExternal
            >
              Twitter
            </Link>
            {!account ? (
              <Flex
                justifyContent="center"
                alignItems="center"
                color="white"
                fontWeight="bold"
                as="button"
                w="200px"
                bg="pinkBtn"
                borderWidth="1px"
                h="50px"
                borderColor="white"
                borderRadius="25px"
                mr="10px"
                className="desktop-only"
                onClick={onConnect}
              >
                Connect Wallet
              </Flex>
            ) : (
              <Text color="black">{formatAddress(account)}</Text>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
