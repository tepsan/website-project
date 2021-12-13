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
} from '@chakra-ui/react';

export default function Headers() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState('right');
  return (
    <Flex
      px={{ base: '10px', md: '15px', lg: '20px', xl: '50px' }}
      py="20px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        w={{ base: '150px', md: '200px', lg: '300px' }}
      />
      <Flex className="desktop-only">
        <Link mr="50px" color="white" fontSize="2xl" textTransform="uppercase">
          Opensea
        </Link>
        <Link mr="50px" color="white" fontSize="2xl" textTransform="uppercase">
          Discord
        </Link>
        <Link mr="50px" color="white" fontSize="2xl" textTransform="uppercase">
          Twitter
        </Link>
      </Flex>
      <Flex alignItems="center">
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
        >
          Connect Wallet
        </Flex>
        <Box
          as="button"
          bg="white"
          p="2"
          onClick={onOpen}
          display={{ base: 'block', md: 'none' }}
          className="mobile-only"
        >
          <HiMenu color="black" size="30" />
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
            >
              Twitter
            </Link>
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
            >
              Connect Wallet
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
