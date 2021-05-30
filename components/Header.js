import { css } from '@emotion/react';
import Link from 'next/link';

// import logo from '../public/images/logo.svg';

const headerStyles = css`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px 15px;

  a {
    margin-left: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    overflow: hidden;
  }
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <span>{/* <img src={logo} alt="logo with leaf" /> */}</span>
    </header>
  );
}
