import Link from 'next/link';
import { Flex, Text, Image, Link as ChakraLink } from '@chakra-ui/react';
import { Content } from '@/data/types';
import { appAccentColor, appSecondaryColor } from '@/styles/colors';

interface Props {
  content: Content;
}

export default function MainNewsCard({ content }: Props) {
  return (
    <Flex
      direction='column'
      alignItems='end'
      cursor='grab'
      backgroundColor={appSecondaryColor}
      borderRadius={5}
      m={2}
      p={4}
    >
      {content.image && (
        <Image
          width='100%'
          height={450}
          fit='cover'
          src={content.image}
          alt={content.title}
        />
      )}

      <Flex mt={3} direction='column'>
        <Text
          fontSize='2xl'
          textDecoration='underline'
          fontWeight='medium'
          mb={5}
        >
          {content.title}
        </Text>
        <Text fontSize='xl'>{content.content.substring(0, 200)} . . .</Text>
      </Flex>
      <Link href={`/content/${content.id}`} passHref>
        <ChakraLink mt={5} color={appAccentColor} fontSize='xl'>
          Read More
        </ChakraLink>
      </Link>
    </Flex>
  );
}
