import { Container, Divider, Text } from '@chakra-ui/react';
import { companyName } from '@/data/data.json';
import { appTextSecondary } from '@/styles/colors';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container mt={20} mb={10} textAlign='center'>
      <Divider />
      <Text mt={6} color={appTextSecondary}>
        &copy; {currentYear} {companyName}, All right reserved
      </Text>
    </Container>
  );
}
