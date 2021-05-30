import { css } from '@emotion/react';
import Link from 'next/link';

const heroStyles = css`
  background-image: url('images/hero-background.jpg');
  opacity: 0.5;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
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
