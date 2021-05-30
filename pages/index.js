import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home page</h1>
    </Layout>
  );
}
