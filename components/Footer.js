import { css } from '@emotion/react';
import Link from 'next/link';
import { darkGrey } from '../pages/_app';

const footerStyles = css`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: ${darkGrey};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;

  a {
    margin-left: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    color: white;
    font-weight: bold;
    overflow: hidden;
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
