import Link from 'next/link';
import NewsContainer from '@/components/news/NewsContainer';
import { Flex, Center, Link as ChakraLink } from '@chakra-ui/react';
import { articlesTitle, articlesContent } from '@/data/index';
import { appAccentColor } from '@/styles/colors';

export default function ArticleSection() {
  return (
    <Flex direction='column' m={6} mt={10}>
      <NewsContainer title={articlesTitle} contents={articlesContent} />
      <Center mt={10}>
        <Link href='/articles' passHref>
          <ChakraLink color={appAccentColor} fontSize='xl'>
            explore more
          </ChakraLink>
        </Link>
      </Center>
    </Flex>
  );
}
