// This is the description of the change
// to the database

exports.up = async function up(sql) {
  await sql`
CREATE TABLE products (
      id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
     	name varchar(40) NOT NULL,
			price varchar(40) NOT NULL,
			currency varchar(40) NOT NULL,
			image varchar(100) NOT NULL,
			description varchar(1000) NOT NULL
    )
  `;
};

// This is the description of the REVERSE
// of the change to the database

exports.down = async function down(sql) {
  await sql`
    DROP TABLE products
  `;
};
