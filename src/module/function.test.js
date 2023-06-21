const { stringlength } = require('./function.js').default;
test('check if the string is at least 1 character long and not longer than 10 characters', () => {
  if(!stringlength || stringlength.length < 1 || stringlength.length > 10 ) {
    //!stringlength checks length is 0 or str is empty!
    throw 'error';
  }
});