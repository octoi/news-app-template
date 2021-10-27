import Layout from '@/components/Layout';
import { Flex } from '@chakra-ui/react';
import { allNews } from '@/data/index';
import NewsContainer from '@/components/news/NewsContainer';

export default function news() {
  return (
    <Layout title='News'>
      <Flex m={6}>
        <NewsContainer title='All News' newsContent={allNews} />
      </Flex>
    </Layout>
  );
}
