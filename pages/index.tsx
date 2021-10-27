import EditorialPart from '@/components/home/EditorialPart';
import MainNews from '@/components/home/MainNews';
import OtherNews from '@/components/home/OtherNews';
import Layout from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <EditorialPart />
      <MainNews />
      <OtherNews />
    </Layout>
  );
}
