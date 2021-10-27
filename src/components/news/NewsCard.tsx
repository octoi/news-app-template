import Link from 'next/link';
import { Content } from '@/data/types';
import { Flex, Text, Button } from '@chakra-ui/react';
import {
  appAccentColor,
  appPrimaryColor,
  appSecondaryColor,
  appTextSecondary,
} from '@/styles/colors';

interface Props {
  content: Content;
}

export default function NewsCard({ content }: Props) {
  return (
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
  );
}
