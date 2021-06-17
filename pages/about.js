import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';

const pageContainer = css`
  display: flex;
  flex-direction: row;
  /* height: 100vh; */
  width: 100%;
  align-items: center;
  //background-color: yellow;
  margin-top: 40px;
  //margin-top: 25px;
`;

const heroContainer = css`
  position: relative;
  width: 100vw;
  height: 50vh;
  align-items: center;
  justify-content: center;
  display: flex;
  //margin-bottom: 10px;
  z-index: 2;

  ::before {
    content: ' ';
    background-image: url('images/woman_herb_garden.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 50vh;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
    z-index: -1;
  }
`;

const heroHeading = css`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 25px;
  font-size: 46px;
  text-transform: uppercase;
  font-weight: 900;
`;

const leftContainer = css`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 500px;
  align-items: center;
  justify-content: center;
  margin-left: 15%;
  //background-color: red;

  p {
    font-size: 20px;
    padding: 20px;
    line-height: 1.5em;
    text-align: center;
  }
`;

const rightContainer = css`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 500px;
  align-items: center;
  justify-content: center;
  //margin-left: 10%;
  //background-color: blue;

  p {
    font-size: 20px;
    padding: 50px;
    line-height: 1.5em;
    text-align: center;
  }
`;

const imageContainer = css`
  img {
    height: 350px;
    border-radius: 5px;
    margin-bottom: 10px;
    object-fit: cover;
    box-shadow: 0 7px 17px rgb(0 0 0 / 13%);
  }
`;

export default function About(props) {
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>About</title>
      </Head>
      <div css={heroContainer}>
        <div css={heroHeading}>Our mission</div>
      </div>

      <section css={pageContainer}>
        {/* Start of products container */}

        <div css={leftContainer}>
          <div css={imageContainer}>
            <img src="images/save_the_planet_1.jpg" alt="young herb plant" />
          </div>
        </div>

        <div css={rightContainer}>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </section>
      <section css={pageContainer}>
        <div css={leftContainer}>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>

        <div css={rightContainer}>
          <div css={imageContainer}>
            <img src="images/save_the_planet_2.jpg" alt="young herb plant" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
