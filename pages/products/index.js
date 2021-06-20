import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { darkBrown, lightRose, rose } from '../../util/sharedStyles';

const pageContainer = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  //background-color: ${lightRose};
  margin-top: 25px;
  margin: 0 auto;
`;

const heroContainer = css`
  position: relative;
  width: 100vw;
  height: 50vh;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 50px;
  z-index: 2;

  ::before {
    content: ' ';
    background-image: url('images/hero-product-overview.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 50vh;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
    z-index: -1;
  }
`;

const heroHeading = css`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 25px;
  font-size: 46px;
  text-transform: uppercase;
  font-weight: 900;
`;

const productsContainer = css`
  display: flex;
  justify-content: center;
  width: 100vw;

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
  margin-left: 60px;

  //margin-right: 40px;
`;

const imageContainer = css`
  display: flex;

  > img {
    border-radius: 5px;
    margin-bottom: 10px;
    width: 230px;
    height: 300px;
    object-fit: cover;
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
  a {
    display: inline-block;
    text-decoration: none;
    color: white;
    background-color: ${rose};
    font-size: 16px;
    font-weight: 300;
    border: none;
    border-radius: 8px;
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
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Products</title>
      </Head>

      <div css={heroContainer}>
        <div css={heroHeading}>Our selected herbs</div>
      </div>

      <section css={pageContainer}>
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
                    <div css={priceContainer}>
                      {product.price / 100} {product.currency}
                    </div>
                    <div css={buttonContainer}>
                      <Link href={`/products/${product.id}`}>
                        <a data-cy="single-product-learn-more">Learn more</a>
                      </Link>
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
  const { getAllProducts } = await import('../../util/database');
  const products = await getAllProducts();
  console.log(products);

  return {
    props: {
      products: products,
    },
  };
}
