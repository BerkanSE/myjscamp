function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : " + productName + " Adet : " + quantity)
}
//Defaul olan en başta iken
//addToCart() //Sepete eklendi : Elma Adet : undefined
//addToCart(10) //Sepete eklendi : 10 Adet : undefined

//Eğer Default değeri olanı en sona yazarsak
//addToCart(10) //Sepete eklendi : Elma Adet : 10

//Fonksiyon bir değişkene atılabilir
let sayHello = ()=>{
    console.log("Hello World!")
}
sayHello()

//Fonksiyon değişken atamanın başka yöntemi
let sayHello2 = function () {
    console.log("Hello World 2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}
addToCart2("Elma",6,10)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}
addToCart3(product1)

//Referans tip (Obje, Array, Class, Interface)
//Stack & Heap
let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
//console.log(product3.productName)

//Değer tip (Primitif)
//Bellekte tanımlanıyor (Stack)
let sayi1 = 10 
let sayi2 = 20
sayi1 = sayi2 
sayi2 = 100
//console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}
let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(number1, number2) {
    console.log(number1 + number2)
}
//add(20,30)

//rest 
//rest sona yazılır
function add2(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
}
//add2(20,30,40)

let numbers = [30,10,500,600,120]
//spread
//console.log(...numbers)
//console.log(Math.max(...numbers))

//Destructing
let [icAnadolu, marmara,karadeniz,[icAnadoluSehirleri]] = [
{name:"İç Anadolu", population:"20M"},
{name:"Marmara", population:"30M"},
{name:"Karadeniz", population:"10M"},
[
    ["Ankara","Konya"],
    ["İstanbul","Bursa"],
    ["Sinop","Trabzon"]
]
]
console.log(icAnadolu)
console.log(marmara)
console.log(icAnadoluSehirleri)