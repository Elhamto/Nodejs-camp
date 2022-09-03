const arr=[1,3,6,11,13,16,17]

function search(arr, param) {
        let len = (arr.length -1) / 2
        if (param == arr[len]) {
            return true
        }
        if (param >= arr[len]) {
            slice = search(arr.slice(len))
        }
        if (param <= arr[len]) {
            slice = search(arr.slice(0, len))
        }

        // const array =[]
        // (left[0]>right[0]) ? array.push(right.shift()) : array.push(left.shift())
        // return (sort(left),sort(right))
}
search(arr,11)