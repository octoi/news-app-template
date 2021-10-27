import { Content } from '@/data/types';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Grid, Text } from '@chakra-ui/react';
import NewsCard from './NewsCard';

interface Props {
  title: string;
  newsContent: Content[];
}

export default function NewsContainer({ title, newsContent }: Props) {
  const { width } = useWindowSize();
  const itemInRowCount = width ? (width > 1000 ? 2 : 1) : 1;

  return (
    <div>
      <Text fontSize='2xl' textDecoration='underline' fontWeight='medium'>
        {title}
      </Text>
      <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns={`repeat(${itemInRowCount}, 1fr)`}
        gap={3}
        mt={10}
      >
        {newsContent.map((content: Content) => (
          <NewsCard key={content.id} content={content} />
        ))}
      </Grid>
    </div>
  );
}
