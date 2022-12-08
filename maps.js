function forMap(arr, iterateeFunc){
    for (let i = 0; i < arr.length; i++){
      iterateeFunc(arr[i])
    }
  }
  module.exports = {forMap};