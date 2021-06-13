import 'bootstrap/dist/css/bootstrap.min.css';
import { css } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Layout from '../components/Layout';
import { darkBrown, darkGrey, rose } from '../pages/_app';

const pageContainer = css`
  display: flex;
  align-items: center;
  /* width: 100vw;
  height: 100vh; */
  justify-content: center;
  margin-top: 25px;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0 auto;
`;

const customerInfoDataContainer = css`
  display: flex;
  //justify-content: center;
  width: 50vw;
  margin-left: 20px;
  margin-right: 20px;
  background-color: red;
  height: 90vh;
  border: solid 2px gray;
  border-radius: 8px;
`;

const rightContainer = css`
  display: flex;
  margin-top: 10px;
  //justify-content: center;
  width: 50vw;
  margin-left: 20px;
  margin-right: 20px;
  background-color: orange;
  flex-direction: column;
  height: 70vh;

  h1 {
    margin-bottom: 20px;
  }

  Form.Control {
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
`;

const totalSumContainer = css`
  //align-items: center;
  flex-direction: column;
  display: flex;
  align-self: flex-start;
  height: 40vh;
  background-color: yellow;
  border: solid 2px gray;
  border-radius: 8px;
  padding-right: 20px;
  padding-left: 20px;

  h1 {
    font-size: 28px;
    margin-top: 10px;
  }
`;

const totalSumCalculation = css`
  //align-items: center;
  flex-direction: column;
  display: flex;

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

const leftContainer = css`
  display: flex;
  //justify-content: center;
  margin-top: 10px;
  width: 50vw;
  margin-left: 20px;
  margin-right: 20px;
  background-color: green;
  flex-direction: column;
  height: 70vh;

  h1 {
    margin-bottom: 20px;
  }
`;

const iconContainer = css`
  img {
    width: 50px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
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
  margin-top: 10px;
  text-transform: uppercase;

  :hover {
    background-color: ${darkBrown};
    color: white;
    cursor: pointer;
  }
`;

const feedbackStyles = css``;

export default function CheckoutPage(props) {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [productsInCart] = useState(props.productsInCart);

  const totalSum = productsInCart
    .reduce((acc, product) => {
      return acc + Number(product.price / 100) * product.quantity;
    }, 0)
    .toFixed(2);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };

  const findFormErrors = () => {
    const {
      fullName,
      email,
      address,
      city,
      zip,
      state,
      cardnumber,
      cardname,
      expMonth,
      expYear,
      cvv,
      checkbox,
    } = form;
    const newErrors = {};
    // name errors
    if (!fullName || fullName === '') {
      newErrors.fullName = 'Please enter your full name!';
    } else if (fullName.length > 40) {
      newErrors.fullName = 'Your name is too long!';
    }

    // card number errors
    if (!cardnumber || cardnumber === '') {
      newErrors.cardnumber = 'Please enter your card number!';
    } else if (cardnumber.length > 16 || cardnumber.length < 16) {
      newErrors.fullName = 'Please enter a valid card number!';
    }

    // state errors
    if (!state || state === '') {
      newErrors.state = 'Please enter a state!';
    }

    // email errors
    if (!email || email === '') {
      newErrors.email = 'Please enter your email!';
    }
    // address errors
    if (!address || address === '') {
      newErrors.address = 'Please enter your address!';
    } else if (address.length > 100) {
      newErrors.address = 'Your address is too long!';
    }
    // zip code errors
    if (!zip || zip.length > 5 || zip.length < 5) {
      newErrors.zip = 'Please enter a valid ZIP Code!';
    }
    // city errors
    if (!city || city === '') {
      newErrors.city = 'Please enter a city!';
    }

    // card number errors
    if (!cardnumber || cardnumber.length !== 16) {
      newErrors.cardnumber = 'Please enter a valid credit card number!';
    }

    // expiration month error
    if (!expMonth || expMonth === '') {
      newErrors.expMonth = 'Please enter an expiration month';
    }

    // cardname error
    if (!cardname || cardname === '') {
      newErrors.cardname = 'Please enter your card name';
    }

    // expiration year error
    if (!expYear || expYear === '') {
      newErrors.country = 'Please enter an expiration year';
    } else if (expYear.length > 4 || expYear.length < 4) {
      newErrors.address = 'Please enter a valid expiration year!';
    }

    // cvv error
    if (!cvv || cvv === '') {
      newErrors.cvv = 'Please enter your cvv!';
    } else if (expYear.length > 3 || expYear.length < 3) {
      newErrors.cvv = 'Please enter a valid cvv!';
    }

    // checkbox errors
    if (!checkbox || checkbox === '') {
      newErrors.checkbox =
        'Please verify that your Billing address is the same as your shipping address';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      // alert('Your payment went through!');
    }
  };

  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Checkout</title>
      </Head>
      <section css={pageContainer}>
        <Form>
          <div css={customerInfoDataContainer}>
            <div css={leftContainer}>
              <h1>Billing address</h1>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  onChange={(e) => setField('fullName', e.target.value)}
                  type="text"
                  id="fname"
                  placeholder="John M. Doe"
                  isInvalid={!!errors.fullName}
                />
                <Form.Control.Feedback type="invalid" css={feedbackStyles}>
                  {errors.fullName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) => setField('email', e.target.value)}
                  type="text"
                  id="email"
                  placeholder="john@example.com"
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid" css={feedbackStyles}>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  onChange={(e) => setField('address', e.target.value)}
                  type="text"
                  id="adr"
                  placeholder="542 W. 15th Street"
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid" css={feedbackStyles}>
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  id="city"
                  placeholder="New York"
                  onChange={(e) => setField('city', e.target.value)}
                  isInvalid={!!errors.city}
                />
                <Form.Control.Feedback type="invalid" css={feedbackStyles}>
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  id="state"
                  placeholder="NY"
                  onChange={(e) => setField('state', e.target.value)}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid" css={feedbackStyles}>
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  id="zip"
                  placeholder="10001"
                  onChange={(e) => setField('zip', e.target.value)}
                  isInvalid={!!errors.zip}
                />
                <Form.Control.Feedback type="invalid" css={feedbackStyles}>
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label> Shipping address same as billing</Form.Label>

                <Form.Control
                  as="checkbox"
                  onChange={(e) => setField('checkbox', e.target.value)}
                  isInvalid={!!errors.checkbox}
                />

                <Form.Control.Feedback type="invalid" css={feedbackStyles}>
                  {errors.checkbox}
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div css={rightContainer}>
              <h1>Payment</h1>
              <div>Accepted Cards</div>
              <div css={iconContainer}>
                <img src="/images/visa.png" alt="" />
                <img src="/images/americanexpress.png" alt="" />
                <img src="/images/mastercard.png" alt="" />
                <img src="/images/paypal.png" alt="" />
              </div>

              <Form.Group>
                <Form.Label>Name on Card</Form.Label>
                <Form.Control
                  type="text"
                  id="cname"
                  placeholder="John More Doe"
                  onChange={(e) => setField('cardname', e.target.value)}
                  isInvalid={!!errors.cardname}
                />
                <Form.Control.Feedback type="invalid" css={feedbackStyles}>
                  {errors.cardname}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Credit card number</Form.Label>
                <Form.Control
                  type="text"
                  id="ccnum"
                  placeholder="1111-2222-3333-4444"
                  onChange={(e) => setField('cardnumber', e.target.value)}
                  isInvalid={!!errors.cardnumber}
                />
                <Form.Control.Feedback type="invalid" css={feedbackStyles}>
                  {errors.cardnumber}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Exp Month</Form.Label>
                <Form.Control
                  type="text"
                  id="expmonth"
                  placeholder="September"
                  onChange={(e) => setField('expMonth', e.target.value)}
                  isInvalid={!!errors.expMonth}
                />
                <Form.Control.Feedback type="invalid" css={feedbackStyles}>
                  {errors.expMonth}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Exp Year</Form.Label>
                <Form.Control
                  type="text"
                  id="expyear"
                  placeholder="2018"
                  onChange={(e) => setField('expYear', e.target.value)}
                  isInvalid={!!errors.expYear}
                />
                <Form.Control.Feedback type="invalid" css={feedbackStyles}>
                  {errors.expYear}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="352"
                  onChange={(e) => setField('cvv', e.target.value)}
                  isInvalid={!!errors.cvv}
                />
                <Form.Control.Feedback type="invalid" css={feedbackStyles}>
                  {errors.cvv}
                </Form.Control.Feedback>
              </Form.Group>
              <button
                css={buttonStyles}
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Pay now
              </button>
            </div>
          </div>

          {/* //not working */}
          {/* <button
            type="submit"
            onClick={((e) => handleSubmit(e), router.push('/thankyou/'))}
          >
            Pay now
          </button> */}
        </Form>

        {/* Start of total sum container */}
        <div css={totalSumContainer}>
          <h1>Order Summary</h1>

          <div css={totalSumCalculation}>
            <div>Subtotal:{totalSum} €</div>
            <div>Shipping fee: 0.00 €</div>
            <div>Total: {totalSum} €</div>
          </div>
        </div>
      </section>
    </Layout>
  );
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
