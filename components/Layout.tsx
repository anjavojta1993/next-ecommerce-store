import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

const containerStyles = css`
  margin: 0;
`;

type Props = {
  shoppingCart: {
    id: string;
    quantity: string;
  }[];

  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      {/* pass props from _app.js */}
      <Header shoppingCart={props.shoppingCart} />
      <div css={containerStyles}>{props.children}</div>
      <Footer />
    </>
  );
}
