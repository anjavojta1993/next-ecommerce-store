import { css } from '@emotion/react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { darkBrown, lightRose } from '../../pages/_app';
import {
  addQuantityByProductId,
  parseCookieValue,
} from '../../util/cookies';

const buttonStyles = css`
  color: white;
  background-color: ${lightRose};
  font-size: 14px;
  font-weight: 900;
  border: none;
  border-radius: 5px;
  padding: 20px 30px;
  letter-spacing: 2px;
  text-transform: uppercase;

  :hover {
    background-color: ${darkBrown};
    color: white;
    cursor: pointer;
  }
`;


export default function SingleProduct(props) {

  return (
    // pass props to Layout
    <Layout
    shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}>
      <Head>
        <title>{props.product.name}</title>
      </Head>

      <h1>{props.product.name}</h1>
      <div>
        <img src={props.product.image} alt="herb" />
      </div>
      <div>{props.product.description}</div>
      <div>{props.product.price}</div>
      <button
        css={buttonStyles}
        onClick={() => {
          // Avoid using the document.cookie
          // API - it is built in a strange
          // way and it's hard to use
          //
          // document.cookie = ''

          // Instead, use the js-cookie library
          // to set and get your cookies
         props.setShoppingCart(
                    addQuantityByProductId(props.product.id),
                  );
        }}
      >
        Add to cart
      </button>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // The name inside the square brackets of the filename
  // is inside of the `context.query` object
  const productId = context.query.productId;

  console.log('cookies', context.req.cookies);

  const { products } = await import('../../util/database');
  const product = products.find((p) => p.id === productId);

  return {
    props: {
      product: product,
      quantity: parseCookieValue(context.req.cookies.quantity, []),
    },
  };
}
