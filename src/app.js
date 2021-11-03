console.log("Merhaba Kodlama.io")

const euroDun = 11.2
//euroDun = 10

let konutKredileri = ["Konut kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi","Özel Konut Kredisi"] 

// console.log("<ul>")
// for (let i = 0; i <konutKredileri.length; i++) {
//     console.log("<li>"+ konutKredileri[i] + "</li")   
// }
// console.log("</ul>")
// console.log(konutKredileri)

let sayi1 = 10
let student = {id:1, name:"Berkan"}
//console.log(student) //

function save(ogrenci, puan=10) {
    console.log(ogrenci.name + " : " + puan)
}
// save(student);

//rest
//C# --> params
//Java --> varArgs
//fonksiyonları böyle tanımlayabiliriz.
let showProducts = function (id, ...products){
    console.log(id)
    console.log(products)
}
//typeof tipini gösterir.
//console.log(typeof showProducts) Çıktı: function

//Array içinde Array
//showProducts(10,["Elma","Armut","Karpuz"])

//Normal kullanım
//showProducts(10,"Elma","Armut","Karpuz")

//Max değeri rest normal kullanım formatında
//console.log(Math.max(1,6,15,31,5,76,12,38))

//Max değeri rest array içine alırsak
// console.log(Math.max([1,6,15,31,5,76,12,38]))

let points = [1,6,15,31,5,76,12,38]
// console.log(...points)
// console.log(Math.max(...points))
// console.log(..."ABC","D",..."EFG","H")

//Destructing
let populations = [10000, 20000, 30000]
let [small, medium, high] = populations
// console.log(small)
// console.log(medium)
// console.log(high)