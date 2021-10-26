import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';
import { Container } from '@chakra-ui/react';
import { appTextPrimary, appTextSecondary } from '@/styles/colors';

interface Props {
  Icon: IconType;
  redirectionPath: string;
  fontSize?: number;
}

export default function IconButton({ Icon, redirectionPath, fontSize }: Props) {
  const router = useRouter();

  const iconColor =
    router.pathname === redirectionPath ? appTextPrimary : appTextSecondary;

  return (
    <Link href={redirectionPath} passHref>
      <Container p={2} cursor='pointer'>
        <Icon size={fontSize ? fontSize : 25} color={iconColor} />
      </Container>
    </Link>
  );
}
