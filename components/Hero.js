import { css } from '@emotion/react';
import Link from 'next/link';

const heroStyles = css`
  background-image: url('/hero-background.jpg');
  background-size: cover;
  background-position: center;
  width: 100vw;
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
