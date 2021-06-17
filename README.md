## Getting Started

## Learn More

## Setup Guide

1. clone the project on your local machine (git clone <url>)
2. type yarn into your terminal
3. set up the new database (commands in the readme)

Copy the .env.example file to a new file called .env (ignored from Git) and fill in the necessary information.

Follow the instructions from the PostgreSQL step in UpLeveled's System Setup Instructions.

Then, connect to the built-in postgres database as administrator in order to create the database:

Windows

If it asks for a password, use postgres.

psql -U postgres
macOS

psql postgres
Once you have connected, run the following to create the database:

CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
Then, to connect to the database using this new user, quit psql and reconnect:

\q
psql -U <user name> <database name>
Running the migrations
To set up the structure and the content of the database, run the migrations using Ley:

yarn migrate up
To reverse the last single migration, run:

yarn migrate down 4. copy the env file (described in the readme)
