// What is token?
// Token is a string(random set of characters), which stores the information.
// eg: 'mahesh' -> 'yhe723yewhd873'

// What JsonWebToken?
// JWT is type of token, which is used to identify the user.

// What data would be stored in JWT?
// JWT consists of three parts.
// First part of token tells what type of algorithm is used to generate token.
// Second part consists of users data.
// Third part is digital signature. It prevents hacking.
// It will be generated based on previous tokens data and secret key in server

require('dotenv').config();
const config = require('config');
const jsonwebtoken = require('jsonwebtoken');
const jwtDebugger = require('debug')('app:jwt');

const jwtTesting = async () => {
  const jwt = await jsonwebtoken.sign({ name: 'mahesh' }, 'node-playground');
  console.log(jwt);

  const result = await jsonwebtoken.verify(jwt, 'node-playground');
  console.log(result);

  const sol = jsonwebtoken.decode(jwt, { complete: true });
  console.log(sol);

  console.log(process.env.NODE_ENV);
  console.log(process.env.JWT_SECRET_KEY);
  console.log(config.get('name'));
  console.log(process.env.DEBUG);
  jwtDebugger(config.get('jwtSecretKey'));
};

jwtTesting();
