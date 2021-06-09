import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

const pageContainer = css`
  display: flex;
  height: 100vh;
  width: 100vw;
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
  background-color: red;
  flex-direction: column;
  margin-left: 100px;
  height: 500px;
  border: solid 2px gray;
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
  border-radius: 8px;
  background-color: green;
  flex-direction: column;

  /* flex-flow: row-wrap;
  align-content: space-between; */
`;

const cartTotal = css``;

const productContainer = css``;

const productImage = css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  > img {
    border-radius: 5px;
    margin-bottom: 10px;
    width: 120px;
    height: 150px;
    object-fit: cover;
    box-shadow: 0 7px 17px rgb(0 0 0 / 13%);
  }
`;

const productName = css``;

const productCost = css``;

const productQuantity = css``;

const deleteButton = css``;

// STEP 0 : if no items in the cart, display "Your cart is empty"

// STEP 1: display all products that are in the shopping cart (shoppingCart) + their corresponding properties from the database (products)

export default function Cart(props) {
  const [productsInCart, setProductsInCart] = useState(
    props.productsInShoppingBag,
  );

  if (props.shoppingCart === []) {
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
          <title>Shopping cart</title>
        </Head>
        <div css={heroHeading}>Shopping cart</div>

        <section css={pageContainer}>
          <div css={leftContainer}>
            {props.productsInCart.map((product) => {
              return (
                <div key={product.id}>
                  <div css={cartTotal}>
                    Cart total: {product.quantity} items
                  </div>

                  <div css={productContainer}>
                    <div css={productImage}>
                      <img src={product.image} alt="herb product" />
                    </div>
                    <div css={productName}>{product.name}</div>
                    <div css={productQuantity}>{product.quantity}</div>
                    <div css={productCost}>{product.price}</div>
                    <div css={deleteButton}>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div css={rightContainer}></div>
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
      productsInCart,
    },
  };
}
