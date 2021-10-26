import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';

export const HeaderIconsWrapper = styled(Flex)`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const HeaderDrawerWrapper = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: block;
  }
`;
