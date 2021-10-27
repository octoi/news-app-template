import Link from 'next/link';
import {
  Flex,
  Grid,
  Text,
  Button,
  Center,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { otherNewsTitle, otherNewsContent } from '@/data/index';
import { Content } from '@/data/types';
import { useWindowSize } from '@/hooks/useWindowSize';
import {
  appAccentColor,
  appPrimaryColor,
  appSecondaryColor,
  appTextSecondary,
} from '@/styles/colors';

export default function OtherNews() {
  const { width } = useWindowSize();
  const itemInRowCount = width ? (width > 1000 ? 2 : 1) : 1;

  return (
    <Flex direction='column' m={6} mt={10}>
      <Text fontSize='2xl' textDecoration='underline' fontWeight='medium'>
        {otherNewsTitle}
      </Text>
      <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns={`repeat(${itemInRowCount}, 1fr)`}
        gap={3}
        mt={10}
      >
        {otherNewsContent.map((content: Content) => (
          <Flex
            direction='column'
            p={6}
            key={content.id}
            backgroundColor={appSecondaryColor}
            borderRadius={5}
          >
            <Text fontSize='2xl' textDecoration='underline' fontWeight='medium'>
              {content.title}
            </Text>

            <Text mt={3} fontSize='xl' color={appTextSecondary}>
              {content.content.substring(0, 200)}
            </Text>

            <Link href={`/content/${content.id}`} passHref>
              <Button
                mt={3}
                p={4}
                variant='link'
                width='100%'
                backgroundColor={appAccentColor}
                color={appPrimaryColor}
                fontSize='xl'
              >
                read more
              </Button>
            </Link>
          </Flex>
        ))}
      </Grid>
      <Center mt={10}>
        <Link href='/news' passHref>
          <ChakraLink color={appAccentColor} fontSize='xl'>
            explore more
          </ChakraLink>
        </Link>
      </Center>
    </Flex>
  );
}
