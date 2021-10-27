import Link from 'next/link';
import NewsContainer from '@/components/news/NewsContainer';
import { Flex, Center, Link as ChakraLink } from '@chakra-ui/react';
import { otherNewsTitle, otherNewsContent } from '@/data/index';
import { appAccentColor } from '@/styles/colors';

export default function OtherNews() {
  return (
    <Flex direction='column' m={6} mt={10}>
      <NewsContainer title={otherNewsTitle} newsContent={otherNewsContent} />
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
