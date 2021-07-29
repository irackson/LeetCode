function maxProfit(prices: number[]): number {
    if (prices.length <= 1) {
        return Math.abs(prices[0] - prices[1]) || 0;
    }

    let i = 0;
    let z = -1;
    let loop = 0;
    let startingMax: number = 0;
    let startingMin: number = 0;
    while (!startingMax) {
        if (loop > 2) {
            return 0;
        }
        z++;
        startingMin = prices[z];

        for (i = z; i < prices.length; i++) {
            if (startingMin >= prices[i]) {
                continue;
            }
            startingMax = prices[i];
            break;
        }
        loop++;
    }
    console.log('min', startingMin);
    console.log('max', startingMax);
    console.log(prices.slice(i, prices.length));
    // return t;
    const t = startingMax - Math.min(...prices.slice(0, i));

    return t + maxProfit(prices.slice(i, prices.length));
}

// t += prices[b] - Math.min(...prices.slice(prices[a], prices[b]));
console.log(maxProfit([7, 6, 4, 3, 1])); // 4
// console.log(maxProfit([14, 8, 10, 12, 15, 16, 17, 9, 2, 11, 20, 25])); // 7
// find min
// find max to right of min
// store all numbers in between

// const blah = [14, 8, 10, 12, 15, 16, 17, 9, 2, 11, 20, 25];
// console.log(blah.slice(-4, blah.length));

// a = left min, b = next larger
// m = min between a and b
// t = b - m

// b --> a, repeat
