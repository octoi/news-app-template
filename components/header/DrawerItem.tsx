import Link from 'next/link';
import { Button } from '@chakra-ui/react';

interface Props {
  label: string;
  redirectionPath: string;
}

export default function DrawerItem({ label, redirectionPath }: Props) {
  return (
    <Link href={redirectionPath} passHref>
      <Button variant='outline' width='100%' pt={7} pb={7} mt={5}>
        {label}
      </Button>
    </Link>
  );
}
