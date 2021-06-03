import '@fontsource/metropolis';
import { css, Global } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getCartCookieValue } from '../util/cookies';

// color palette of application

export const darkBrown = '#6A300C';
export const rose = '#DF846E';
export const lightRose = '#FBF1EE';
export const darkGreen = '#293A11';
export const lightGreen = '#858D3B';
export const darkGrey = '#68666B';
export const lightGrey = '#D6D5D7'

const contentWrapper = css`
  padding-bottom: 2.5rem;
`;

function App({ Component, pageProps }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  // Updating the state variable after the page loads,
  // so that we don't run into server-side-rendering inconcistencies
  useEffect(() => {
    setShoppingCart(getCartCookieValue());
  }, []);

  return (
    <>
      <Global
        styles={css`
          /* More natural sizing model */
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            /* Remove the default margin on the body */
            position: relative;
            min-height: 100vh;
            margin: 0;
            font-family: 'Metropolis';
          }
        `}
      />

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
