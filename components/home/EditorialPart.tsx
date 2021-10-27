import Link from 'next/link';
import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react';
import { editorialContent } from '@/data/index';
import { appAccentColor, appSecondaryColor } from '@/styles/colors';

export default function EditorialPart() {
  const content = editorialContent.content.substring(0, 700);

  return (
    <Flex
      direction='column'
      backgroundColor={appSecondaryColor}
      borderRadius={5}
      alignItems='end'
      m={6}
      p={5}
    >
      <Flex direction='column'>
        <Text
          fontSize='2xl'
          textDecoration='underline'
          fontWeight='medium'
          mb={3}
        >
          {editorialContent.title}
        </Text>
        <Text fontSize='xl'>{content} . . .</Text>
      </Flex>
      <Link href={`/content/${editorialContent.id}`} passHref>
        <ChakraLink mt={3} color={appAccentColor} fontSize='xl'>
          Read More
        </ChakraLink>
      </Link>
    </Flex>
  );
}
