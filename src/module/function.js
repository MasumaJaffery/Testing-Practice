const stringlength = (str) => {
   return str.length;
 };
 
 const stringreverse = (string) => {
   return string.trim().split('').reverse().join('');
 };

 const stringcapitalize = (string) => {
  return string.toUpperCase();
 };


 class Calculator {
  add(a,b){
     return a + b;
  }
  sub(a,b){
   return a - b;
  }
  multiply(a,b){
    return a * b;
  }
  divide(a,b){
   return  a / b;
  }
 }

// eslint-disable-next-line no-undef
module.exports = {stringlength, stringreverse, stringcapitalize, Calculator };
 