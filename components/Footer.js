import { css } from '@emotion/react';
import Link from 'next/link';
import { lightGrey } from '../pages/_app';

const footerStyles = css`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: ${lightGrey};
  /* position: absolute;
  bottom: 0; */
  width: 100%;
  height: 50px;

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

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <Link href="/privacy-policy">
        <a>Privacy Policy</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </footer>
  );
}
