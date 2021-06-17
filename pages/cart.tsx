import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';
import Layout from '../components/Layout';
import {
  removeProductByProductId,
  updateQuantityByProductId,
} from '../util/cookies';
import { darkBrown, darkGrey, rose } from '../util/sharedStyles';

const pageContainer = css`
  display: flex;
  /* height: 100vh; */
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  align-items: center;
  justify-content: center;
  /* margin-top: 25px;
  margin: 0 auto; */
`;

const pageContainerNoItems = css`
  display: flex;
  height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
  align-items: center;
  justify-content: center;
  /* margin-top: 25px;
  margin: 0 auto; */
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
  justify-content: center;
  width: 50vw;
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: column;
  margin-left: 100px;
  //height: 500px;
  //border: solid 2px gray;
  border-radius: 8px;

  /* flex-flow: row-wrap;
  align-content: space-between; */
`;

const rightContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin-right: 100px;
  height: 500px;
  border: solid 2px gray;
  //border-radius: 8px;
  //background-color: green;
  flex-direction: column;
  padding: 20px;

  > h1 {
    display: flex;
    font-size: 28px;
    font-weight: 900;
    margin-top: 20px;
  }

  /* flex-flow: row-wrap;
  align-content: space-between; */
`;

const totalSumContainer = css`
  //align-items: center;
  flex-direction: column;
  display: flex;
  padding: 20px;

  div {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
  }

  .shipping-fee {
    border-bottom: 1px solid black;
  }

  .total-sum {
    font-weight: 900;
    font-size: 20px;
  }
`;

const cartTotalItems = css`
  display: flex;
  margin-bottom: 20px;
  padding: 20px;
  font-size: 24px;
  justify-content: center;
  align-self: center;
  width: 50vw;
  //background-color: orange;
  border: solid 2px gray;
`;

const productContainer = css`
  display: flex;
  //background-color: purple;
  border: solid 2px gray;
  margin-bottom: 10px;
  width: 50vw;
  padding: 20px;
  justify-content: center;
  align-self: center;
`;

const productImageContainer = css`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 190px;
  //background-color: blue;
  margin-right: 20px;
`;

const productImage = css`
  border-radius: 5px;
  margin-bottom: 10px;
  width: 120px;
  height: 150px;
  object-fit: cover;
  box-shadow: 0 7px 17px rgb(0 0 0 / 13%);
  display: flex;
  justify-content: center;
  align-self: center;
`;

const productName = css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  font-size: 16px;
  font-weight: 900;
  //background-color: yellow;
  margin-bottom: 10px;
`;

const productQuantityContainer = css`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 190px;
  //background-color: red;
  margin-right: 20px;
  align-items: center;
  justify-content: center;

  label {
    font-size: 20px;
    text-align: center;
    //margin-bottom: 20px;
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

const productSubtotalContainer = css`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 190px;
  //background-color: green;
  margin-right: 20px;
  align-items: center;
  justify-content: center;

  p {
    font-size: 20px;
    text-align: center;
    /* margin-bottom: 20px; */
  }

  div {
    margin-bottom: 30px;
  }

  /* .product-cost {
    display: flex;
    align-items: center;
    justify-content: center;

  } */
`;

// const productCost = css`
//   display: flex;
//   justify-content: center;
//   color: red;
//   background-color: red;
//   align-items: center;
// `;

const buttonContainer = css`
  display: flex;
  align-self: center;
`;

const buttonStyles = css`
  color: black;
  background-color: ${rose};
  font-size: 16px;
  font-weight: 300;
  border: none;
  //border-radius: 8px;
  padding: 20px 30px;
  letter-spacing: 2px;
  text-transform: uppercase;

  :hover {
    background-color: ${darkBrown};
    color: white;
    cursor: pointer;
  }
`;

const deleteButtonContainer = css`
  display: flex;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`;

const deleteButton = css`
  color: white;
  background-color: ${darkGrey};
  font-size: 12px;
  font-weight: 300;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  letter-spacing: 2px;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
  }
`;

type Products = {
  id: number;
  quantity: string;
  name: string;
  price: string;
  currency: string;
  image: string;
};

type CookieArray = {
  id: number;
  quantity: string;
};

type Props = {
  products: Products[];

  productsInCart: {
    id: number;
    quantity: string;
    name: string;
    price: string;
    currency: string;
    image: string;
  }[];

  setProductsInCart: {
    id: number;
    quantity: string;
    name: string;
    price: string;
    currency: string;
    image: string;
  }[];

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

// STEP 0 : if no items in the cart, display "Your cart is empty"

// STEP 1: display all products that are in the shopping cart (shoppingCart) + their corresponding properties from the database (products)

export default function Cart(props: Props) {
  console.log('props', props);
  const router = useRouter();

  const [productsInCart, setProductsInCart] = useState(props.productsInCart);

  const totalSum = productsInCart
    .reduce((acc, product) => {
      return acc + (Number(product.price) / 100) * Number(product.quantity);
    }, 0)
    .toFixed(2);

  const quantityItemsInCart = productsInCart
    .map((p) => p.quantity)
    .reduce((total, amount) => Number(total) + Number(amount), 0);

  if (productsInCart.length === 0) {
    return (
      <Layout shoppingCart={props.shoppingCart}>
        <section css={pageContainerNoItems}>
          You have no items in your shopping cart.
        </section>
      </Layout>
    );
  } else {
    return (
      <Layout shoppingCart={props.shoppingCart}>
        <Head>
          <title>Shopping bag</title>
        </Head>
        <div css={heroHeading}>Shopping bag</div>

        <section css={pageContainer}>
          <div css={leftContainer}>
            <div css={cartTotalItems}>
              Cart total:{' '}
              {quantityItemsInCart > 1
                ? `${quantityItemsInCart} items`
                : `${quantityItemsInCart} item`}
            </div>

            {productsInCart.map((product) => {
              return (
                <div key={product.id}>
                  <div css={productContainer}>
                    {/* container for image & heading */}
                    <div css={productImageContainer}>
                      <div css={productName}>{product.name}</div>
                      <img
                        css={productImage}
                        src={product.image}
                        alt="herb product"
                      />
                    </div>
                    {/* Container for quantity & heading */}
                    <div css={productQuantityContainer}>
                      <label htmlFor="quantity">Quantity</label>
                      <div>
                        <input
                          css={inputStyles}
                          data-cy="quantity-input-dropdown-cart"
                          type="number"
                          min="1"
                          value={product.quantity}
                          onChange={(event) => {
                            props.setShoppingCart(
                              updateQuantityByProductId(
                                product.id,
                                event.target.value,
                              ),
                            );
                            setProductsInCart(
                              productsInCart.map((prod) => {
                                if (prod.id === product.id) {
                                  return {
                                    ...prod,
                                    quantity: event.target.value,
                                  };
                                } else {
                                  return prod;
                                }
                              }),
                            );
                          }}
                        />
                      </div>
                    </div>
                    {/* Container for subtotal */}
                    <div css={productSubtotalContainer}>
                      <p>Subtotal</p>
                      <div>
                        {(
                          Number(product.quantity) *
                          (Number(product.price) / 100)
                        ).toFixed(2)}{' '}
                        €
                      </div>
                    </div>

                    <div css={deleteButtonContainer}>
                      <button
                        data-cy="remove-button-cart"
                        css={deleteButton}
                        onClick={() => {
                          props.setShoppingCart(
                            removeProductByProductId(product.id),
                          );
                          setProductsInCart(
                            productsInCart.filter(
                              (prod) => prod.id !== product.id,
                            ),
                          );
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div css={rightContainer}>
            <h1>Order Summary</h1>

            <div css={totalSumContainer}>
              <div>Subtotal: {totalSum} €</div>
              <div className="shipping-fee">Shipping fee: 0.00 €</div>
              <div className="total-sum">Total: {totalSum} €</div>
              <div css={buttonContainer}>
                <button
                  data-cy="checkout-button"
                  css={buttonStyles}
                  type="button"
                  onClick={() => router.push('/checkout/')}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { getAllProducts } = await import('../util/database');
  const products = await getAllProducts();

  const rawCookie = context.req.cookies.cart;

  // check if raw cookie is undefined

  const cookieArray = rawCookie ? JSON.parse(rawCookie) : [];

  const productsInCart = cookieArray.map((prod: CookieArray) => {
    console.log(cookieArray);
    const copyProductsInCart = products.find((p: Products) => p.id === prod.id);
    return {
      id: copyProductsInCart.id,
      quantity: prod.quantity,
      name: copyProductsInCart.name,
      price: copyProductsInCart.price,
      currency: copyProductsInCart.currency,
      image: copyProductsInCart.image,
    };
  });

  return {
    props: {
      products,
      productsInCart,
    },
  };
}
