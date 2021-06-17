import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';

const pageContainer = css`
  position: relative;
  width: 100vw;
  height: 90vh;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 25px;
  margin: 0 auto;
  z-index: 2;

  ::before {
    content: ' ';
    background-image: url('images/thankyou.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 90vh;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
    z-index: -1;
  }
`;

const pageHeading = css`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 25px;
  font-size: 46px;
  text-transform: uppercase;
  font-weight: 900;
`;

export default function About(props) {
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Thank you</title>
      </Head>
      <div css={pageContainer}>
        <div css={pageHeading}>Thank you for your purchase &#9829;</div>
      </div>
    </Layout>
  );
}
