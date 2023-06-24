const { stringlength, stringreverse, stringcapitalize, Calculator } = require('./function.js');
test('check if the string is at least 1 character long and not longer than 10 characters', () => {
  if(!stringlength || stringlength.length < 1 || stringlength.length > 10 ) {
    //!stringlength checks length is 0 or str is empty!
    throw 'error';
  }
});
test('reverseString should return the reversed string', () => {
  // Arrange
  const string = "Hello";
  const expected = "olleH";
  // Act
  const result = stringreverse(string);
  // Assert
  expect(result).toEqual(expected);
});
test('returns that String Capitialize', () => {
 // Arrange
 const string = 'apple';
 const expected = 'APPLE';
 //Act
 const result = stringcapitalize(string);
 // Assert
 expect(result).toEqual(expected);
});


describe('class Calculator', () => {
  let sum;

  beforeEach(() => {
    sum = new Calculator();
  });

  test('returns the result of addition', () => {
    expect(sum.add(10, 2)).toBe(12);
  });

  test('returns the result of subtraction', () => {
    expect(sum.sub(10, 2)).toBe(8);
  });

  test('returns the result of multiplication', () => {
    expect(sum.multiply(10, 2)).toBe(20);
  });

  test('returns the result of division', () => {
    expect(sum.divide(10, 2)).toBe(5);
  });
});
