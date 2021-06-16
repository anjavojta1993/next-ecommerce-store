import '@fontsource/metropolis';
import { css } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { globalStyles } from '../styles/globalStyles';
import { getCartCookieValue } from '../util/cookies';

const contentWrapper = css`
  padding-bottom: 2.5rem;
`;

function App({ Component, pageProps }) {
  // variable for the cookies which include quantity and id of products
  const [shoppingCart, setShoppingCart] = useState([]);

  // Updating the state variable after the page loads,
  // so that we don't run into server-side-rendering inconcistencies
  useEffect(() => {
    setShoppingCart(getCartCookieValue());
  }, []);

  return (
    <>
      {globalStyles}
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component
        // passing props to use it in all components of other pages

        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        css={contentWrapper}
        {...pageProps}
      />
    </>
  );
}

export default App;
