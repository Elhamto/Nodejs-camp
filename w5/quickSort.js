const arr=[1,4,3,-1,6 ,11,6, -10 , 2]


function quikSort(arr) {
    if (arr.length<2) 
        return arr
    const pvote = arr[arr.length -1]
    const pvoteIndex =arr.length -1
    const left = arr.filter((v ,i, pvote)=>{return v<pvote});
    const right = arr.filter((v ,i, pvote)=>{return (v>=pvote && i != pvoteIndex)});    
console.log(left , right);
    // quikSort(left, pvote)
    // quikSort(right, pvote)
    
        return [...quikSort(left), pvote, ...quikSort(right)]
    }

console.log(quikSort(arr));
