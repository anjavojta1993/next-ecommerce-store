## HerbMeHome - Next.JS e-commerce store

![alt text](/public/images/home.jpg?raw=true 'HerbMeHome Store')

![alt text](/public/images/thankyou2.jpg?raw=true 'HerbMeHome Store')

## Description

HerbMeHome is an e-commerce store project built during the upLeveled web development bootcamp. It uses various technologies (see technologies used) to simulate a real shopping experience from browsing the products until checking out and successfully submitting an order.

## Technologies used

- Next.js
- React.js
- Typescript
- PostgreSQL
- Emotion
- Bootstrap
- Cypress
- Jest

## Setup Guide

1. Clone the project on your local machine (git clone <url>)
2. Type yarn into your terminal
3. Set up a database:

- CREATE DATABASE `<database name>`
- CREATE USER `<user name>` WITH ENCRYPTED PASSWORD `<user password>`
- GRANT ALL PRIVILEGES ON DATABASE `<database name>` TO `<user name>`

4. Quit psql and connect to the database

- `\q`
- psql -U `<user name>` `<database name>`

5. Run the migrations using ley

- yarn migrate up
- yarn migrate down (To reverse the last single migration)

6. Copy the .env.example file to a new file called .env (ignored from Git) and fill in the necessary information.

## Deployment Guide

1. Sign up for Heroku: https://signup.heroku.com/
2. Create a new App
3. Choose a name and select the "Europe" Region
4. Click on the button in the middle called "Connect to GitHub"
5. Search for your repository in the search box at the bottom of the page and click on the "Connect" button
6. Click on the button for "Enable Automatic Deploys"
7. Go back to the Overview tab and click on "Configure Add-On"
8. Search for "Postgres" and select "Heroku Postgres" from the results
9. Deploy your app
