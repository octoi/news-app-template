import { Flex, Image } from '@chakra-ui/react';
import { Content } from '@/data/types';
import { appSecondaryColor } from '@/styles/colors';

interface Props {
  content: Content;
}

export default function MainNewsCard({ content }: Props) {
  return (
    <Flex direction='column' m={2} p={2} backgroundColor={appSecondaryColor}>
      {content.image && <Image src={content.image} alt={content.title} />}
    </Flex>
  );
}
