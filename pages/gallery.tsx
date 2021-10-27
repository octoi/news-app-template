import Layout from '@/components/Layout';
import { Flex } from '@chakra-ui/react';
import { mediaContentTitle, mediaContent } from '@/data/index';
import GalleryContent from '@/components/gallery/GalleryContent';

export default function GalleryPage() {
  return (
    <Layout title='Gallery'>
      <Flex m={6}>
        <GalleryContent title={mediaContentTitle} contents={mediaContent} />
      </Flex>
    </Layout>
  );
}
