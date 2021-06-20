/* eslint-disable @next/next/no-page-custom-font */
import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { darkBrown, rose } from '../util/sharedStyles';

const heroStyles = css`
  position: relative;
  height: 100vh;
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
  bottom: 10%;
  left: 10%;
  width: 600px;
  height: 350px;

  h1 {
    font-size: 48px;
    line-height: 1.1em;
    font-family: 'Cedarville Cursive';
  }

  h2 {
    font-size: 24px;
    line-height: 1.3em;
    letter-spacing: 1px;
  }

  button {
    color: white;
    background-color: ${rose};
    font-size: 16px;
    font-weight: 300;
    border: none;
    border-radius: 8px;
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
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap"
          rel="stylesheet"
        />
      </Head>
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
          <Link href="/products/">
            <a>
              <button>Shop now</button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
