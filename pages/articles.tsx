import Layout from '@/components/Layout';
import NewsContainer from '@/components/news/NewsContainer';
import { Flex } from '@chakra-ui/react';
import { articlesContent, articlesTitle } from '../data';

export default function ArticlePage() {
  return (
    <Layout>
      <Flex m={6}>
        <NewsContainer title={articlesTitle} contents={articlesContent} />
      </Flex>
    </Layout>
  );
}
