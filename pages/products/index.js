import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

// Props will come from getServerSide props object
// below
export default function Products(props) {
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>

      <h1>Products</h1>
      <ul>
        {props.products.map((product) => (
          <li key={`product-${product.id}`}>
            <Link href={`/products/${product.id}`}>
              <a>{product.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

// Code written inside of getServerSideProps
// will ONLY be run on the server
//
// This allows you to do things like:
// - access the filesystem using fs / node:fs
// - read from a database

export async function getServerSideProps() {
  const { products } = await import('../../util/database');

  return {
    props: {
      products: products,
    },
  };
}
