import { css } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { darkBrown, lightRose } from '../../pages/_app';

const pageContainer = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  background-color: purple;
  margin-top: 25px;
  margin: 0 auto;

  > h1 {
    justify-content: center;
    padding-top: 25px;
    padding-bottom: 25px;
    font-weight: 900;
  }
`;

const productsContainer = css`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: green;
  /* flex-flow: row-wrap;
  align-content: space-between; */
`;

const singleProductContainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* width: 400px;
  height: 300px; */
  justify-content: center;
  margin-left: 40px;
  //margin-right: 40px;
  background-color: red;
`;

const imageContainer = css`
  display: flex;

  > img {
    border-radius: 5px;
    margin-bottom: 10px;
    width: 230px;
    height: 200px;
    box-shadow: 0 7px 17px rgb(0 0 0 / 13%);
  }
`;

const headingContainer = css`
  display: flex;
  font-size: 24px;
  font-weight: 900;
  line-height: 1.5em;
  margin-bottom: 10px;
`;

const priceContainer = css`
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.5em;
`;

const buttonContainer = css`
  button {
    color: white;
    background-color: ${lightRose};
    font-size: 14px;
    font-weight: 900;
    border: none;
    border-radius: 5px;
    padding: 20px 30px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 10px;

    :hover {
      background-color: ${darkBrown};
      color: white;
      cursor: pointer;
    }
  }
`;

// Props will come from getServerSide props object
// below
export default function Products(props) {
  const router = useRouter();
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Products</title>
      </Head>
      <section css={pageContainer}>
        <h1>Our selected herbs</h1>
        {/* Start of products container */}
        <section>
          <div css={productsContainer}>
            {props.products.map((product) => {
              return (
                <div key={product.id}>
                  <div css={singleProductContainer}>
                    <div css={imageContainer}>
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div css={headingContainer}>{product.name}</div>
                    <div css={priceContainer}>{product.price}</div>
                    <div css={buttonContainer}>
                      <button
                        type="button"
                        onClick={() => router.push(`/products/${product.id}`)}
                      >
                        Learn more
                      </button>
                    </div>

                    {/* end of products container */}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
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
