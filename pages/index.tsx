import EditorialPart from '@/components/home/EditorialPart';
import MainNews from '@/components/home/MainNews';
import Layout from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <EditorialPart />
      <MainNews />
    </Layout>
  );
}
