import { css } from '@emotion/react';
import Link from 'next/link';

const heroStyles = css`
  display: flex;
  padding: 10px 15px;
  background-color: #ddd;
  margin-bottom: 20px;
  a + a {
    margin-left: 15px;
  }
`;

export default function Hero() {
  return (
    <div css={heroStyles}>
      <h1>Grow your own herb garden</h1>
      <h2>
        Get locally sourced, organic herbs delivered to your door and watch them
        grow from your home.
      </h2>
    </div>
  );
}
