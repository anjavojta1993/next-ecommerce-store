/* eslint-disable @next/next/no-page-custom-font */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { darkBrown, lightRose } from '../pages/_app';

const heroStyles = css`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;

  ::before {
    content: '';
    background-image: url('images/hero-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    width: 100%;
    background-attachment: fixed;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
  }
`;

const heroHeadingContainer = css`
  position: absolute;
  bottom: 15%;
  left: 10%;
  width: 600px;
  height: 350px;

  h1 {
    font-size: 60px;
    line-height: 1.1em;
    font-family: 'Cedarville Cursive', cursive;
  }

  h2 {
    line-height: 1.3em;
    letter-spacing: 1px;
  }

  button {
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
  }
`;

export default function Hero() {
  const router = useRouter();
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dawning+of+a+New+Day&display=swap"
          rel="stylesheet"
        />
      </head>
      <div css={heroStyles}>
        <div css={heroHeadingContainer}>
          <h1>
            Grow your own <br />
            herb garden
          </h1>
          <h2>
            Get locally sourced, organic herbs delivered to your door and watch
            them grow from your home.
          </h2>
          <button type="button" onClick={() => router.push('/products/')}>
            Shop now
          </button>
        </div>
      </div>
    </>
  );
}
