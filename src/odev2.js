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
//console.log(isPrime(2,4,8,7,33,99) + " sayıları asal sayılardır")

//Friend numbers
function isFriendNumbers(a, b) {
    let sumA = 0
    let sumB = 0
    for (let i = 1; i < a; i++) {
        if (a % i === 0) {
            sumA += i 
        }
    }
    for (let j = 1; j < b; j++){
        if (b % j === 0) {
            sumB += j
        }
    }

    if (sumA === b && sumB === a) {
        console.log(`${a} and ${b} are friend numbers`)
    }
    else{
        console.log(`${a} and ${b} are not friend numbers`)
    }
}
//isFriendNumbers(220,284)

//Perfect Number
//List All perfect numbers to 1000
function findPerferctNumbers(range = 1000) {
    let sum = 0
    let perfectNumbers = []
    for (let i = 1; i < range ;i++) {
        for (let x = 1; x < i; x++) {
            if (i % x == 0) {
                sum += x
            }
        }
            if (sum == i) {
                perfectNumbers.push(i)  
            }
            sum=0
        }
        perfectNumbers.forEach(element => {
            console.log(element)
        })
    }

findPerferctNumbers(1000)

function findPrimeNumbers(range = 1000) {
    let primeNumbers2 = []
    for (let index = 2; index <= range; index++) {
       let x = 0
       for (let j = 2; j < index; j++) {
           if (index % j == 0) {
               x++
               break              
           }
           
       } 
       if (x == 0) {
           primeNumbers2.push(index)
       }
        
    }
    console.log("Prime Numbers: " + primeNumbers2)
}

findPrimeNumbers(1000)