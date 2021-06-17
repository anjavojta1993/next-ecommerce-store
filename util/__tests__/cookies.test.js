/**
 * @jest-environment jsdom
 */

import {
  addQuantityByProductId,
  removeProductByProductId,
  updateQuantityByProductId,
} from '../cookies';

// test function for adding a cookie

test('new cookie value is correct when adding item', () => {
  const testId = 1;
  const testQuantity = 3;
  const expectedResult = [{ id: 1, quantity: 3 }];

  const result = addQuantityByProductId(testId, testQuantity);
  expect(result).toEqual(expectedResult);
});

// test functions for updating cookie that already exists

test('change quantity of cookie in cart', () => {
  const testId = 1;
  const testQuantity = 5;
  const testResult = [{ id: 1, quantity: 5 }];

  updateQuantityByProductId(testId, testQuantity);
  const result = updateQuantityByProductId(testId, testQuantity);
  expect(result).toEqual(testResult);
});

// remove item in cart

test('remove item cookie in cart', () => {
  const testId = 1;
  const testArray = removeProductByProductId(testId);
  expect(testArray.some(({ id }) => id === testId)).toBe(false);
});

// delete quantity of item in cart that already exists

// test('decrease quantity of cookie in cart', () => {
//   const testId = 1;
//   const testResult = [{ id: testId, quantity: 2 }];

//   updateQuantityByProductId(testId);
//   updateQuantityByProductId(testId);
//   const result = updateQuantityByProductId(testId);
//   expect(result).toEqual(testResult);
// });
