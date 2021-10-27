import { MediaContent } from '@/data/types';
import { Text, Grid, Flex } from '@chakra-ui/react';
import GalleryItem from './GalleryItem';

interface Props {
  title: string;
  contents: MediaContent[];
}

export default function GalleryContent({ title, contents }: Props) {
  return (
    <Flex direction='column' width='100%'>
      <Text fontSize='2xl' textDecoration='underline' fontWeight='medium'>
        {title}
      </Text>
      <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns={`repeat(1, 1fr)`}
        gap={3}
        mt={10}
      >
        {contents.map((content: MediaContent, idx: number) => (
          <GalleryItem key={idx} content={content} />
        ))}
      </Grid>
    </Flex>
  );
}
