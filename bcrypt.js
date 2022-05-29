// What is hashing?
// Storing in the data into random set of characters.

// What is bcrypt? How it will be helpful?
// bcrypt is npm library, used to hash the passwords.

// What is salt?
// Salt is generated random set of characters at every moment.
// Used to put front or back of password and hash it as complete string.

// Why salt is necessary?
// Hackers see our mongoDB data and hashed passwords, try to hash popular passwords
// and get real password with analysis. To avoid using salt is best practice.

require('dotenv').config();
const bcrypt = require('bcrypt');
const bcryptDebugger = require('debug')('app:bcrypt');
const userPassword = 'mahesh123';
const fakePassword = 'Mahesh123';

const testBcrypt = async () => {
  //generated salt
  const salt = await bcrypt.genSalt(10);
  console.log(salt);

  //hashing password
  const hashedPassword = await bcrypt.hash(userPassword, salt);
  // const hashedPassword = await bcrypt.hash(userPassword, 10);
  console.log(hashedPassword);

  //compare
  const result = await bcrypt.compare(userPassword, hashedPassword);
  console.log(result);

  const value = await bcrypt.compare(fakePassword, hashedPassword);
  console.log(process.env.DEBUG);
  bcryptDebugger(value);
};

testBcrypt();
