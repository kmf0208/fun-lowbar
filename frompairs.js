function fromPairs(a){
    console.log(a)
    let b = {};
    for(let i = 0; i < a.length; i++){
        b[a[i][0]] = a[i][1];
        console.log(b)
    }
    return b
};

module.exports = {fromPairs};