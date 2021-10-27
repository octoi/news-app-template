import { MediaContent } from '@/data/types';
import {
  appAccentColor,
  appSecondaryColor,
  appTextSecondary,
} from '@/styles/colors';
import { Flex, Text, Image } from '@chakra-ui/react';

interface Props {
  content: MediaContent;
}

export default function GalleryItem({ content }: Props) {
  return (
    <Flex
      direction='column'
      p={4}
      backgroundColor={appSecondaryColor}
      borderRadius={5}
    >
      <Text fontSize='xl' mb={4} fontWeight='medium' color={appAccentColor}>
        {content.author}
      </Text>
      {content.isVideo ? (
        <video width='100%' controls>
          <source src={content.content} type='video/mp4' />
          Your browser does not support video playing feature
        </video>
      ) : (
        <Image
          width='100%'
          fit='cover'
          src={content.content}
          alt={content.author}
        />
      )}
      <Text fontSize='xl' mt={4} color={appTextSecondary}>
        {content.description}
      </Text>
    </Flex>
  );
}
