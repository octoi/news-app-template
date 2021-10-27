import Layout from '@/components/Layout';
import NewsContainer from '@/components/news/NewsContainer';
import { Flex } from '@chakra-ui/react';
import { allNews } from '@/data/index';

export default function news() {
  return (
    <Layout title='News'>
      <Flex m={6}>
        <NewsContainer title='All News' contents={allNews} />
      </Flex>
    </Layout>
  );
}
