import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { darkBrown, lightRose, rose } from '../pages/_app';

const pageContainer = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
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
    background-image: url('images/woman_herb_garden.jpg');
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

export default function About(props) {
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>About</title>
      </Head>
      <div css={heroContainer}>
        <div css={heroHeading}>Our mission</div>
      </div>

      <section css={pageContainer}>{/* Start of products container */}</section>
    </Layout>
  );
}
