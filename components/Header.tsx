import React from 'react';
import IconButton from './header/IconButton';
import PageDrawer from './header/PageDrawer';
import { Flex, Text } from '@chakra-ui/react';
import { HeaderIconsWrapper } from '@/styles/header.styled';
import { BsNewspaper } from 'react-icons/bs';
import {
  MdOutlineHome,
  MdOutlineFeed,
  MdOutlinePermMedia,
} from 'react-icons/md';

export default function Header() {
  return (
    <Flex m={6} justifyContent='space-between'>
      <Text fontWeight='bold' fontSize='3xl'>
        TIC
      </Text>

      <HeaderIconsWrapper>
        <IconButton Icon={MdOutlineHome} redirectionPath='/' fontSize={30} />
        <IconButton Icon={BsNewspaper} redirectionPath='/news' />
        <IconButton Icon={MdOutlineFeed} redirectionPath='/articles' />
        <IconButton Icon={MdOutlinePermMedia} redirectionPath='/gallery' />
      </HeaderIconsWrapper>

      <PageDrawer />
    </Flex>
  );
}
