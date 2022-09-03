const arr=[1,4,3,-1,6 ,11,6, -10 , 2]

function sort(arr) {
    
    for (let i = 1; i < arr.length ; i++) {
        const key = arr[i];  // 3
        let j = i-1         //1
        console.log("j",j);
        for (; j >= 0 && arr[j] > key; j--) {            
            arr[j + 1] = arr[j];  
            console.log(j,arr);
        }
        arr[j + 1] = key;  
        console.log("i",i, arr);
    }
 return arr
}
console.log(sort(arr));
 
