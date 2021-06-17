import { css } from '@emotion/react';
import Link from 'next/link';
import { darkGrey, lightGrey } from '../util/sharedStyles';

const footerStyles = css`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: ${lightGrey};
  /* position: absolute;
  bottom: 0; */
  width: 100%;
  height: 50px;
  border-top: 1px solid ${darkGrey};

  a {
    margin-left: 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    overflow: hidden;

    :first-of-type {
      margin-left: 120px;
    }
  }
`;

const socialMediaStyles = css`
  :first-of-type {
    margin-left: 220px;
  }

  > img {
    border-radius: 5px;
    margin-left: 20px;
    height: 24px;
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <Link href="/privacy-policy">
        <a>Privacy Policy</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <span css={socialMediaStyles}>
        <img src="/images/facebook.png" alt="shopping cart with counter" />
        <img src="/images/instagram.png" alt="shopping cart with counter" />
        <img src="/images/twitter.png" alt="shopping cart with counter" />
      </span>
    </footer>
  );
}
