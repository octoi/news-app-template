import React from 'react';
import Head from 'next/head';
import { pageTitle, pageDescription } from '@/data/data.json';
import { Container } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = pageTitle,
  description = pageDescription,
}: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      {children}
    </div>
  );
}
