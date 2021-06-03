import { css } from '@emotion/react';
import Link from 'next/link';
import { darkBrown, lightRose } from '../pages/_app';
import logo from '../public/images/logo-green.svg';
import cart from '../public/images/shopping-cart.png';

const logoStyles = css`
  margin-left: 220px;
  height: 30px;
`;

const shoppingCartStyles = css`
  margin-left: 480px;
`;

const cartCount = css`
  position: absolute;
  background: ${lightRose};
  color: #ffffff;
  min-width: 16px;
  height: 16px;
  border-radius: 16px;
  line-height: 17px;
  font-size: 11px;
  right: 130px;
  top: 5px;
  text-align: center;

  :hover {
    background: ${darkBrown};
    cursor: pointer;
  }
`;

const headerStyles = css`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px 15px;

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

export default function Header(props) {
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
      <span>
        <img css={logoStyles} src={logo} alt="logo with leaf" />
      </span>

      <span>
        <img
          css={shoppingCartStyles}
          src={cart}
          alt="shopping cart with counter"
        />
      </span>
      <span css={cartCount}>
        {/* // not yet working */}
        {/* {props.shoppingCart
          .map((p) => p.quantity)
          .reduce((total, amount) => total + amount, 0)} */}
      </span>
    </header>
  );
}
