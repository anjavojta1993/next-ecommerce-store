import { css } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/Layout';
import { darkBrown, darkGrey, rose } from '../pages/_app';
import {
  removeProductByProductId,
  updateQuantityByProductId,
} from '../util/cookies';

const pageContainer = css`
  display: flex;
  /* height: 100vh;
  width: 100vw; */
  padding-top: 50px;
  padding-bottom: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin: 0 auto;
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
  //background-color: red;
  flex-direction: column;
  margin-left: 100px;
  height: 500px;
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

  div:nth-child(2) {
    border-bottom: 1px solid black;
  }

  div:nth-child(3) {
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
  //background-color: green;
  margin-right: 20px;
  align-items: center;
  justify-content: center;

  label {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }
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
    margin-bottom: 20px;
  }
`;

const productCost = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const inputStyles = css`
  display: flex;
  justify-content: center;
  //color: red;
  //background-color: red;
  align-items: center;
`;

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

// STEP 0 : if no items in the cart, display "Your cart is empty"

// STEP 1: display all products that are in the shopping cart (shoppingCart) + their corresponding properties from the database (products)

export default function Cart(props) {
  const router = useRouter();

  const [productsInCart, setProductsInCart] = useState(props.productsInCart);

  const totalSum = productsInCart
    .reduce((acc, product) => {
      return acc + Number(product.price / 100) * product.quantity;
    }, 0)
    .toFixed(2);

  const quantityItemsInCart = productsInCart
    .map((p) => p.quantity)
    .reduce((total, amount) => Number(total) + Number(amount), 0);

  if (productsInCart.length === 0) {
    return (
      <Layout
        shoppingCart={props.shoppingCart}
        setShoppingCart={props.setShoppingCart}
      >
        <section css={pageContainer}>
          You have no items in your shopping cart.
        </section>
      </Layout>
    );
  } else {
    return (
      <Layout
        shoppingCart={props.shoppingCart}
        setShoppingCart={props.setShoppingCart}
      >
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
                      <div css={inputStyles}>
                        <input
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
                      <div css={productCost}>
                        {(Number(product.quantity) *
                          Number(product.price).toFixed(2)) /
                          100}{' '}
                        €
                      </div>
                    </div>

                    <div css={deleteButtonContainer}>
                      <button
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
              <div>Subtotal:{totalSum} €</div>
              <div>Shipping fee: 0.00 €</div>
              <div>Total: {totalSum} €</div>
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

export async function getServerSideProps(context) {
  const { getAllProducts } = await import('../util/database');
  const products = await getAllProducts();

  const rawCookie = context.req.cookies.cart;

  // check if raw cookie is undefined

  const cookieArray = rawCookie ? JSON.parse(rawCookie) : [];

  const productsInCart = cookieArray.map((prod) => {
    const copyProductsInCart = products.find((p) => p.id === prod.id);
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
