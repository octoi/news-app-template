import Layout from '@/components/Layout';
import { Flex, Text, Image } from '@chakra-ui/react';
import { findOneContent, allContent } from '@/data/index';
import { Content } from '@/data/types';
import { appAccentColor, appTextSecondary } from '@/styles/colors';

interface Props {
  content: Content;
}

export default function ContentPage({ content }: Props) {
  return (
    <Layout title={content.title}>
      <Flex m={6} direction='column'>
        <Text fontSize='2xl' fontWeight='medium'>
          {content.title}
        </Text>
        <Text fontSize='xl' mt={5} fontWeight='medium' color={appAccentColor}>
          {content.author}
        </Text>
        {content.image && (
          <Image mt={5} src={content.image} alt={content.title} />
        )}
        <Text fontSize='xl' mt={5} color={appTextSecondary}>
          {content.content}
        </Text>
      </Flex>
    </Layout>
  );
}

export async function getStaticPaths() {
  const contents = allContent;

  const paths = contents.map((content) => ({
    params: { id: content.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }: any) {
  const content: any = await findOneContent(id);

  return {
    props: {
      content,
    },
  };
}
