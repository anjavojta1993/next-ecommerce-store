import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import Layout from '../../components/Layout';
import { addQuantityByProductId, parseCookieValue } from '../../util/cookies';
import { darkBrown, darkGrey, lightGrey, rose } from '../../util/sharedStyles';

const pageContainer = css`
  background-color: ${lightGrey};
  display: flex;
  height: 100%;
  width: 100vw;
  align-items: center;
  margin-top: 25px;
  margin: 0 auto;
`;

const backToProductsStyles = css`
  display: flex;
  font-size: 20px;
  font-weight: 400;
  margin-top: 50px;
  text-transform: uppercase;
  color: black;

  :hover {
    cursor: pointer;
    color: ${darkGrey};
  }
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
  flex-direction: column;
  width: 300px;
  align-items: center;
  justify-content: center;
  height: 700px;
  margin-left: 100px;
  //background-color: green;
`;

const deliveryDetailsContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
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

const userInputContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  font-weight: 900;
  border: none;
  border-radius: 5px;
  padding: 20px 30px;
  letter-spacing: 2px;

  label {
    font-size: 16px;
    text-align: center;
    margin-bottom: px;
  }
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

const inputStyles = css`
  display: flex;
  font-family: 'Metropolis';
  text-align: center;
  width: 50px;
  margin-top: 20px;
  padding: 5px;
`;

type Product = {
  id: string;
  quantity: string;
  name: string;
  price: string;
  currency: string;
  description: string;
  image: string;
};

type Props = {
  product: Product;

  shoppingCart: {
    id: string;
    quantity: string;
  }[];

  setShoppingCart: Dispatch<
    SetStateAction<
      {
        id: number;
        quantity: string;
      }[]
    >
  >;
};

export default function SingleProduct(props: Props) {
  // create useState for dropdown quantity selection user

  const [userQuantitySelection, setUserQuantitySelection] = useState(1);

  // event handler function for updating the selected quantity by user

  function handleChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
    setUserQuantitySelection(parseFloat(event.target.value));
  }
  return (
    // pass props to Layout
    <Layout shoppingCart={props.shoppingCart}>
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
          <div css={deliveryDetailsContainer}>
            <div>
              <ul css={listStylesContainer}>
                <li>&#10003; &nbsp; Fresh from your local gardener</li>
                <li>&#10003; &nbsp; Free delivery</li>
                <li>&#10003; &nbsp; 2 - 5 working days delivery </li>
              </ul>
            </div>
            <div css={priceContainer}>
              {Number(props.product.price) / 100} {props.product.currency}
            </div>
            <div css={userInputContainer}>
              <label htmlFor="quantity">Quantity:</label>
              <input
                css={inputStyles}
                data-cy="quantity-input-dropdown"
                type="number"
                min="1"
                value={userQuantitySelection}
                onChange={handleChangeQuantity}
              />
            </div>
            <div css={buttonContainer}>
              <button
                data-cy="single-product-add-to-cart-button"
                css={buttonStyles}
                onClick={() => {
                  props.setShoppingCart(
                    addQuantityByProductId(
                      props.product.id,
                      Number(userQuantitySelection),
                    ),
                  );
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
          <Link href="/products">
            <a css={backToProductsStyles}>≪ &nbsp; Back to products</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // The name inside the square brackets of the filename
  // is inside of the `context.query` object
  const productId = context.query.productId;

  const { getProductById } = await import('../../util/database');
  const product = await getProductById(productId);

  return {
    props: {
      product: product || null,
      quantity: parseCookieValue(context.req.cookies.quantity, []),
    },
  };
}
