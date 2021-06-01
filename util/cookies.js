import cookies from 'js-cookie';

export default function getQuantityCookieValue() {
  const cookieValue = cookies.getJSON('quantity');
  return (
    // Test if the cookie value is an array
    Array.isArray(cookieValue)
      ? // If it is, return the array value
        cookieValue
      : // If it's not, return an empty array
        []
  );
}

export function addQuantityByProductId(productId) {
  const newCookieValue = [...getQuantityCookieValue()];

  const quantityProductInCookie = newCookieValue.find(
    (user) => user.id === productId,
  );

  if (quantityProductInCookie) {
    quantityProductInCookie.claps = quantityProductInCookie.claps + 1;
  } else {
    newCookieValue.push({
      id: productId,
      quantity: 0,
    });
  }

  cookies.set('quantity', newCookieValue);
}

export function parseCookieValue(value, defaultValue) {
  try {
    return JSON.parse(value);
  } catch (err) {
    return defaultValue;
  }
}
