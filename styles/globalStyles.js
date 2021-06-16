import { css, Global } from '@emotion/react';

const myGlobalStyles = css`
  body {
    /* Remove the default margin on the body */
    position: relative;
    display: flex;
    min-height: 100vh;
    margin: 0;
    font-family: 'Metropolis';
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export const globalStyles = <Global styles={myGlobalStyles} />;
