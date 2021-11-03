//Ex-2 Question-1
//Prime Number
function isPrime(...numbers) {
    let primeNumbers = [];
    numbers.forEach((n) => {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false
            }
        }
        primeNumbers.push(n)

    })
    return primeNumbers
}
// console.log(isPrime(2,4,8,7) + " sayıları asal sayılardır")

//Friend numbers
// function isFriendNumbers(a, b) {
//     let sumA = 0
//     let sumB = 0
//     for (let i = 1; i < a; i++) {
//         if (a % i === 0) {
//             sumA += i 
//         }
//     }
//     for (let j = 1; j < b; b++){
//         if (b % j === 0) {
//             sumB += j
//         }
//     }

//     if (sumA === b && sumB === a) {
//         console.log(`${a} and ${b} are friend numbers`)
//     }
//     else{
//         console.log(`${a} and ${b} are not friend numbers`)
//     }
// }
// isFriendNumbers(220,284)

