import { Container, Divider, Text } from '@chakra-ui/react';
import { company } from '@/data/index';
import { appTextSecondary } from '@/styles/colors';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container mt={20} mb={10} textAlign='center'>
      <Divider />
      <Text mt={6} color={appTextSecondary}>
        &copy; {currentYear} {company}, All right reserved
      </Text>
    </Container>
  );
}
