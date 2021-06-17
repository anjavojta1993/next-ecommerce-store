/**
 * @jest-environment jsdom
 */

// test cart total sum

import { getTotalSum } from '../totalSum';

test('totalSum returns correct value', () => {
  const testArray = [
    { id: 1, price: '390', quantity: '2' },
    { id: 3, price: '290', quantity: '4' },
  ];

  const result = getTotalSum(testArray);
  expect(result).toBe('19.40');
});
