const {fromPairs} = require('../frompairs')
describe('fromPairs',() =>{
    test('return objects',() =>{
        const input = [["a", 1], ["b", 2]];
        const output = {a: 1 ,b: 2};
        const result = fromPairs(input);
        

        expect(result).toEqual(output);


    })

})