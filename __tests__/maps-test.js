const {forMap} = require('../maps');
describe('forMap',() =>{
  test('return the square numbers of the numbers in the array',() =>{
  //arrange
  const testArr = [2, 5, 7];
  const arg = [];
  const testIteratee = (element) => {
    arg.push(Math.pow(element, 2));
    console.log(arg)
  }
 //act
   forMap(testArr, testIteratee)
   //assert
    expect(arg).toEqual([4, 25, 49]);
})
})