const products = [
  {
    name: 'Organic Basil',
    price: '2,99',
    currency: '€',
    image: '/images/basil.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Organic Rosemary',
    price: '3,99',
    currency: '€',
    image: '/images/rosemary.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Organic Sage',
    price: '3,99',
    currency: '€',
    image: '/images/sage.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

exports.up = async function up(sql) {
  await sql`
    INSERT INTO products ${sql(
      products,
      'name',
      'price',
      'currency',
      'image',
      'description',
    )}
  `;
};

exports.down = async function down(sql) {
  for (const product of products) {
    await sql`
      DELETE FROM
        products
      WHERE
        id = ${product.id} AND
        name = ${product.name} AND
				price = ${product.price} AND
				currency = ${product.currency} AND
				image = ${product.image} AND
				description = ${product.description}
    `;
  }
};
