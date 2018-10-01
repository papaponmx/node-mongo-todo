const { SHA256 } = require('crypto-js');

const message = 'I am user number 3';
const hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);


const data = {
  id: 4,
};

const token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'somestring').toString()
}

const resultHash = SHA256(JSON.stringify(token.data) + 'somestring altered').toString();

if ( resultHash === token.hash){
  console.log('Data was not changed');
} else {
  console.log('Data was changed. Do not trust'); 
}