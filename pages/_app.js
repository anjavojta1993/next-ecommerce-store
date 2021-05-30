import '@fontsource/metropolis';
import { css, Global } from '@emotion/react';
import Head from 'next/head';

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
      <Component css={contentWrapper} {...pageProps} />
    </>
  );
}
