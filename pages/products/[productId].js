import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { darkBrown, lightGrey, lightRose, rose } from '../../pages/_app';
import { addQuantityByProductId, parseCookieValue } from '../../util/cookies';

const pageContainer = css`
  background-color: ${lightGrey};
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  margin-top: 25px;
  margin: 0 auto;
`;

const leftContainer = css`
  display: flex;
  justify-content: center;
  width: 50vw;
  margin-left: 20px;
  //background-color: red;
  flex-direction: column;

  /* flex-flow: row-wrap;
  align-content: space-between; */
`;

const imageContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  > img {
    border-radius: 5px;
    margin-bottom: 10px;
    width: 230px;
    height: 300px;
    object-fit: cover;
    box-shadow: 0 7px 17px rgb(0 0 0 / 13%);
  }
`;

const rightContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin-left: 100px;
  height: 500px;
  border: solid 2px gray;
  border-radius: 8px;
  //background-color: green;
  flex-direction: column;

  /* flex-flow: row-wrap;
  align-content: space-between; */
`;

const buttonContainer = css`
  display: flex;
  justify-content: center;
`;

const buttonStyles = css`
  color: white;
  background-color: ${rose};
  font-size: 14px;
  font-weight: 900;
  border: none;
  border-radius: 5px;
  padding: 20px 30px;
  letter-spacing: 2px;
  text-transform: uppercase;

  :hover {
    background-color: ${darkBrown};
    color: white;
    cursor: pointer;
  }
`;

const headingContainer = css`
  justify-content: center;
  display: flex;
  font-size: 20px;
  font-weight: 900;
  line-height: 1.5em;
  margin-bottom: 10px;
`;

const descriptionContainer = css`
  text-align: justify;
  justify-content: center;
  align-self: center;
  display: flex;
  font-size: 16px;
  width: 400px;
  font-weight: 900;
  line-height: 1.5em;
  margin-bottom: 10px;
  //background-color: purple;
`;

const priceContainer = css`
  justify-content: center;
  display: flex;
  font-size: 24px;
  font-weight: 900;
  line-height: 1.5em;
  margin-bottom: 10px;
`;

const listStylesContainer = css`
  list-style-type: none;
  justify-content: center;
  padding: 20px;
  align-self: center;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 900;
  line-height: 1.5em;
  margin-bottom: 10px;

  > li {
    margin-bottom: 20px;
  }
`;

export default function SingleProduct(props) {
  return (
    // pass props to Layout
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>{props.product.name}</title>
      </Head>

      <div css={pageContainer}>
        <div css={leftContainer}>
          <div css={imageContainer}>
            <img src={props.product.image} alt={props.product.name} />
          </div>

          <div css={headingContainer}>
            <h1>{props.product.name}</h1>
          </div>

          <div css={descriptionContainer}>{props.product.description}</div>
        </div>

        <div css={rightContainer}>
          <div>
            <ul css={listStylesContainer}>
              <li>&#10003; &nbsp; Fresh from your local gardener</li>
              <li>&#10003; &nbsp; Free delivery</li>
              <li>&#10003; &nbsp; 2 - 5 working days delivery </li>
            </ul>
          </div>
          <div css={priceContainer}>{props.product.price}</div>
          <div css={buttonContainer}>
            <button
              css={buttonStyles}
              onClick={() => {
                // Avoid using the document.cookie
                // API - it is built in a strange
                // way and it's hard to use
                //
                // document.cookie = ''

                // Instead, use the js-cookie library
                // to set and get your cookies
                props.setShoppingCart(addQuantityByProductId(props.product.id));
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // The name inside the square brackets of the filename
  // is inside of the `context.query` object
  const productId = context.query.productId;

  console.log('cookies', context.req.cookies);

  const { products } = await import('../../util/database');
  const product = products.find((p) => p.id === productId);

  return {
    props: {
      product: product,
      quantity: parseCookieValue(context.req.cookies.quantity, []),
    },
  };
}
