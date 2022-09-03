
// function comb(n, k) {      //DynamicProgramming
//     if (n===k) 
//         return 1
//     else if(k===1) 
//         return n

//    ???
// }
// console.log(comb(5,2));


function combV2(n, k) {
    if (n===0) 
        return 0
    else if(k===1) 
        return n
    else if (n===k || k==0) 
    return 1

    return combV2(n-1, k)+ combV2(n-1, k-1)
}
console.log(combV2(0,0));

console.log("*****");

function combV3(n, k, cache=[]) {   //Dp
    console.log(cache);
    if (n===k) 
        return 1
    if (k===1) 
        return n
    if(cache[[n,k]]){
        return cache[[n,k]]}
    cache[[n,k]]= combV3(n-1, k, cache) + combV3(n-1, k-1, cache)
    return cache[[n, k]]
}
console.log(combV3(10,4));

console.log("*****");

function combV4(n, k, cache=null) {     //Dp
    // console.log(cache);
    if(cache === null)
        cache = Array(n + 1).fill(0).map(() => Array(k + 1).fill(-1))
    if (n===k) 
        return 1
    if (k===1) 
        return n
    if(cache[n][k]>=0){
        return cache[n][k]}
    cache[n][k]= combV4(n-1, k, cache) + combV4(n-1, k-1, cache)
    return cache[n][k]
}
console.log(combV4(10,4));




// console.log(Array(1000 + 1).fill(0).map(() => Array(11 + 1).fill(-1)))