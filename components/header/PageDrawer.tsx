import { HeaderDrawerWrapper } from '@/styles/header.styled';
import { MdMenu, MdOutlineHome } from 'react-icons/md';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import {
  appPrimaryColor,
  appSecondaryColor,
  appTextPrimary,
} from '@/styles/colors';
import DrawerItem from './DrawerItem';

export default function PageDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HeaderDrawerWrapper>
      <IconButton
        aria-label='Open Menu'
        icon={<MdMenu color={appTextPrimary} />}
        backgroundColor={appSecondaryColor}
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={appSecondaryColor}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <DrawerItem label='Home' redirectionPath='/' />
            <DrawerItem label='News' redirectionPath='/news' />
            <DrawerItem label='Articles' redirectionPath='/articles' />
            <DrawerItem label='Gallery' redirectionPath='/gallery' />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HeaderDrawerWrapper>
  );
}
