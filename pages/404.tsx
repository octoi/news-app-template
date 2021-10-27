import Layout from '@/components/Layout';
import Link from 'next/link';
import { appTextPrimary, appTextSecondary } from '@/styles/colors';
import { Flex, Link as ChakraLink, Text } from '@chakra-ui/react';

export default function NotFoundPage() {
  return (
    <Layout>
      <Flex
        direction='column'
        justifyContent='center'
        alignItems='center'
        height='70vh'
      >
        <Text fontSize='4xl' color={appTextPrimary}>
          Page Not Found 🐒
        </Text>
        <Link href='/' passHref>
          <ChakraLink mt={2}>Go Back To Home</ChakraLink>
        </Link>
      </Flex>
    </Layout>
  );
}
