import React from 'react';
import Link from 'next/link';
import IconButton from './header/IconButton';
import PageDrawer from './header/PageDrawer';
import { Flex, Text } from '@chakra-ui/react';
import { companyName } from '@/data/data.json';
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
      <Link href='/' passHref>
        <Text cursor='pointer' fontWeight='bold' fontSize='2xl'>
          {companyName}
        </Text>
      </Link>

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
