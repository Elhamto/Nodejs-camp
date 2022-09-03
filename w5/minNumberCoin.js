const arr=[1,2,5,10,20,50,100,500,1000]
// const arr1=[1,5,9,10]
function coin(arr, monye) {
    // const b =[]
    const result = new Map();
    for (let i = arr.length-1; i >= 0; i--) {
        let a = Math.floor(monye/arr[i])
        if (a!=0)   
            result.set(arr[i],a)
        
        // for (let j = a; j > 0; j--) {
        //     b.push(arr[i]) 
        // }
        monye = monye%arr[i]
    }
    return result
}
console.log(coin(arr, 2541));