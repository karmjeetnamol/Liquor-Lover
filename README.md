# Liquor-Lover

# Table of Contents

# Description

   A liquor app made using node.js, express.js, Sequelize ORM and handlebars.js thet allows users to track their inventory of collected whiskeys and socially interact with other liquor lovers.


# User Story
   As a collector of quality whiskey, I want to track my collection, add personal observations to the catalogue, share my collection with others, and search for rare bottles to add to my collection.

# Acceptance Criteria

   Use Handlebars.js as the templating engine.
   Use MySQL and the Sequelize ORM for the database.
   Have both GET and POST routes for retrieving and adding new data.
   Be deployed using Heroku (with data).
   Have a polished UI.
   Be responsive.
   Include authentication (express-session and cookies).
   Protect API keys and sensitive information with environment variables.

# Installation

  npm init

  npm install

  Dependencies: express, express-handlebars, express-session, mysql2, sequelize, nodemon, dotenv, connect-session-sequelize, bcrypt.

# Usage

  Run the following command at the root of your project and answer the prompted questions:

  mysql -u root -p

  Enter PW when promted

  source db/schema.sql

  quit

  npm run seed

  npm start

