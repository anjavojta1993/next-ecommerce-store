import { css } from '@emotion/react';
import Link from 'next/link';

const footerStyles = css`
  display: flex;
  padding: 10px 15px;
  background-color: #ddd;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;

  a + a {
    margin-left: 15px;
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
