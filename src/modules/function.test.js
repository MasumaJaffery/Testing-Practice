const { stringlength } = require('./function.js');
test('check if the string is at least 1 character long and not longer than 10 characters', () => {
  if(!stringlength || stringlength.length < 1 || stringlength.length > 10 ) {
    throw 'error';
  }
});