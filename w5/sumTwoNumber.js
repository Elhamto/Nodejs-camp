const arr= [1,2,3,5,7,8,10,11,13,20]
const num =4

/***** raveshe 1  O(n) *****/
function findSumIndex(arr, num) {
    let start = 0
    let end = arr.length -1
    while (start < end) {      
        if (arr[start] + arr[end] == num) return (start, end)
        else if (arr[start] + arr[end] > num) end--
        else start++
    }
    return -1
}


/***** raveshe 2  O(n) *****/
function findSumIndexRecursive(arr, num, start = 0, end=null) {
    if (end ===null) end = arr.length -1
    if (start >= end) return -1
    if (arr[start] + arr[end] == num) return [start, end]
    else if (arr[start] + arr[end] > num) return findSumIndexRecursive(arr, num, start, end-1)
    else return findSumIndexRecursive(arr, num, start+1, end)

}


/***** raveshe 3  O(nlogn) *****/
// for(let val of arr){
//     const num1= val
//     const num2 = num - val
//     if(num1===num2) break 
//     let start=1, end=arr.length-1;
//     while (start<=end){
//         let mid=Math.floor((start + end)/2);
//         if (arr[mid]===num2){
//               console.log(num1, num2);
//               return true
//         }
//         else if (arr[mid] < num2) 
//              start = mid + 1;
//         else
//              end = mid - 1;
//     }
// }