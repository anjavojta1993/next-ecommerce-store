import '@fontsource/metropolis';
import { css, Global } from '@emotion/react';
import Head from 'next/head';

// color palette of application

export const darkBrown = '#914220';
export const lightRose = '#D79167';
export const darkGreen = '#0E2D12';
export const lightGreen = '#738B35';
export const lightGrey = '#68666B';

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
