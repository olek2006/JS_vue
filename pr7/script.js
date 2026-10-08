// let prices= [12, 5, 45, 78, 9];
// const prices2= [120, 23, 45, 60, 55];
// console.log(prices2[2]);
//
// prices2[1] = 30;
//
// console.log(prices2);
//
// console.log(prices.length);

// let sum= 0;
// for(let i= 0; i < prices.length; i++){
//     sum += prices[i]
//     if (prices[i] % 2 === 0){
//         console.log(prices[i]);
//     }
// }
// console.log(sum)

// function countLimit(prices, limit){
//     let count = 0;
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] > limit) {
//             count++;
//         }
//     }
//     return count;
// }
//
// let prices = [50, 45, 30, 100, 55]
// let limit = 50
// console.log(countLimit(prices, limit));
//_________________________________________________________________
// function calcAvg(prices) {
//     let sum = 0;
//     for (let i = 0; i < prices.length; i++) {
//         sum += prices[i];
//     }
//     return sum / prices.length;
// }

// let prices = [50, 45, 30, 100, 55];
// console.log(calcAvg(prices));
//_________________________________________________________________
function calcSum() {
    let count = Number(prompt("Enter quantity of numbers:"));
    let numbers = new Array(count);
    let sum = 0;

    for (let i = 0; i < count; i++) {
        numbers[i] = Number(prompt("Enter number " + (i + 1) + ":"));
        sum += numbers[i];
    }

    return sum;
}

let totalSum = calcSum();
console.log("Sum of entered numbers: " + totalSum);
