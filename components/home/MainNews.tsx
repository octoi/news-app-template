import { Flex, Text } from '@chakra-ui/react';
import { mainNewsTitle, mainNewsContent } from '@/data/index';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Content } from '@/data/types';
import Slider from 'react-slick';
import MainNewsCard from './MainNewsCard';

export default function MainNews() {
  const { width } = useWindowSize();

  const largeScreenSliderSettings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    speed: 500,
  };

  const smallScreenSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings = width
    ? width > 800
      ? largeScreenSliderSettings
      : smallScreenSliderSettings
    : largeScreenSliderSettings;

  return (
    <Flex mt={10} direction='column' textDecoration='underline' m={6}>
      <Text fontSize='2xl' fontWeight='medium'>
        {mainNewsTitle}
      </Text>

      <Flex width='100%' direction='column' mt={10} p={2}>
        <Slider {...settings}>
          {mainNewsContent.map((content: Content) => (
            <MainNewsCard key={content.id} content={content} />
          ))}
        </Slider>
      </Flex>
    </Flex>
  );
}
