const arr=[1,4,3,-1,6 ,11,6, -10 , 2]

function sort(arr) {
        let len = (arr.length -1) / 2
    // while (len>1 ) {
        const left = sort(arr.slice(0, len))
        const right = sort(arr.slice(len))
    //     len /=2
    // }
        const array =[]
        (left[0]>right[0]) ? array.push(right.shift()) : array.push(left.shift())
        return (sort(left),sort(right))
}
sort(arr)