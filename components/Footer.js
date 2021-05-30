import { css } from '@emotion/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <Link href="/privacy-policy">
        <a>Privacy Policy</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </footer>
  );
}
