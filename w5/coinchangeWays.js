// const arr=[1,2,5,10,20,50,100,500,1000]
const coins=[2, 5, 3, 6]
const len = coins.length;

/* recursive*/
function coinChangeWays(coins, len, monye, cache=[]) {
    // if (cache==null) {
        
    // }
    if (monye==0) 
        return 1
    if (monye<0) 
        return 1
    if (len<=0) 
        return 1
    // return coinChangeWays( coins, len - 1, monye ) + coinChangeWays( coins, len, monye - coins[len - 1]);
   

    if(cache[[monye, len]]>=0){
        // console.log(n,k,cache[[n,k]]);
        return cache[[monye, len]]}
    cache[[monye, len]]= coinChangeWays( coins, len - 1, monye , cache ) + coinChangeWays( coins, len, monye - coins[len - 1],cache);
    // console.log(n,k,cache[[n,k]]);
    return cache[[monye, len]]


}
console.log(coinChangeWays(coins, len, 10))

/* Dp*/
function countWays(S  , n)
{
	var table = Array(sum+1).fill(0);
	table[0] = 1;
	for (i=0; i<n; i++)
		for (j=coins[i]; j<=sum; j++){
			table[j] += table[j-coins[i]];
            console.log(j);}

	return table[sum];
}

// console.log(countWays(coins, monye));