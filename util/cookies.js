import cookies from 'js-cookie';

export function getCartCookieValue() {
  const cookieValue = cookies.getJSON('cart');
  return (
    // Test if the cookie value is an array
    Array.isArray(cookieValue)
      ? // If it is, return the array value
        cookieValue
      : // If it's not, return an empty array
        []
  );
}

export function addQuantityByProductId(productId, userQuantitySelection) {
  const newCookieValue = [...getCartCookieValue()];

  const quantityProductInCookie = newCookieValue.find(
    (prod) => prod.id === productId,
  );

  if (quantityProductInCookie) {
    quantityProductInCookie.quantity = userQuantitySelection;
  } else {
    newCookieValue.push({
      id: productId,
      quantity: userQuantitySelection,
    });
  }

  cookies.set('cart', newCookieValue);
  return newCookieValue;
}

export function updateQuantityByProductId(productId, quantity) {
  const newCookieValue = [...getCartCookieValue()];

  const quantityProductInCookie = newCookieValue.find(
    (prod) => prod.id === productId,
  );

  if (quantityProductInCookie) {
    quantityProductInCookie.quantity = quantity;
  }

  cookies.set('cart', newCookieValue);
  return newCookieValue;
}

export function removeProductByProductId(productId) {
  const newCookieValue = [...getCartCookieValue()];

  const productIdInCookie = newCookieValue.find(
    (prod) => prod.id === productId,
  );
  const removeId = newCookieValue.findIndex((prod) => prod.id === productId);

  if (productIdInCookie) {
    newCookieValue.splice(removeId, 1);
  } else {
    return newCookieValue;
  }

  cookies.set('cart', newCookieValue);
  return newCookieValue;
}

export function parseCookieValue(value, defaultValue) {
  try {
    return JSON.parse(value);
  } catch (err) {
    return defaultValue;
  }
}
