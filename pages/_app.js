import '@fontsource/metropolis';
import { css, Global } from '@emotion/react';
import Head from 'next/head';
import {useState, useEffect} from 'react';


// color palette of application

export const darkBrown = '#6A300C';
export const lightRose = '#DF846E';
export const darkGreen = '#293A11';
export const lightGreen = '#858D3B';
export const darkGrey = '#68666B';

const contentWrapper = css`
  padding-bottom: 2.5rem;
`;

export default function App({ Component, pageProps }) {
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
      <Component shoppingCart={shoppingCart}
      // passing props to use it in all components of other pages
        setShoppingCart={setShoppingCart}
        css={contentWrapper} {...pageProps} />
    </>
  );
}
