import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
    </Layout>
  );
}
