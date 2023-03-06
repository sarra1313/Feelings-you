// // // function findEven =
// // // мисол

// // // misollar yechamiz 15 ta elemtnga ega bolgan array mavjud uning ichida
// // // numberdan 7ta,  stringdan 3ta, 3ta boolean,null,undefined, malumotlar bor 
// // // ushbu malumotlarning ichidagi numberlarning orasidagi 3 ga va 5 ga bolinadigan 
// // // sonlar kopaytmasini chiqarib beradgan function tuzing
// // let arr = [4, 15, 2, "limon", true, 12, false, true, null, undefined, 30, "anor", 45, 15, "mandarin"];

// // // это другое условие
// // // узунлиги 9 булмагунча охиридан элемент учирадиган цикл жараёнинрнг
// // // let arr = [4, 15, 2, "limon", true, 12, false, true, null, undefined, 30, "anor", 45, 15, "mandarin"];
// //  function findResult(){

// // findResult(arr)
// //          While (arr.length > 9) 
// //         arr.pop();
// //  }
     
// // console.log(arr);


// // //1-misol Array ichida unda 10ta malumot bor uning 6tasi string 
// // //tipida qolgani number va boolean ushbu array ichidagi o harfi bilan 
// // // boshlangan elemntni ochirsin 
// // let arrB= ["olma", 8, "behi", true, "limon", false, "olcha", "olxori", "ananas", 12]

// // for (let i=0 ; i < arrB.length; i++) {
// //         if (typeof arrB[i] == 'string'&& arrB[i][0] == "o"){
                
        
                   
// //         }
        
// //         arrB.splice(i,1) 
// // }

// // console.log(arrB);

// // //2misol
// // let arrC = ["olma", 8, "behi", 45, "limon", false, 11, "olxori", 21, 12]
// // // ushbu array  ichidagi numberlarni boshqa arrayga yuklab chiqarsin va
// // // osha arrayning ichidagi sonlarni osish tartibida joylashtrsin
// // let arrD = [];
// // for (let i = 0; i < arrC.length; i++) {

// //         if (typeof arrC[i] == "number"){
// //                 arrD.push(arrC[i]);
// //                 arrD.sort((a,b) => b-a);
                
// //         }
// //         arrD.sort((a,b) => a-b);
// // }console.log(arrD);


// // задача с  map

// //дано 
// let b = [1, 2, 3, 4]
// // его надо вывести на надпись [ '1 toq', '2 juft', '3 toq', '4 juft']
// let a = b.map((val,ind) => `${val} ${val % 2== 1? 'toq':'juft'}`)
// console.log(a);

// // 2 способ
// let a1 = b.map((val,ind) => `${val} ${val % 2== 0? 'juft':'toq'}`)
// console.log(a1);

// // 3 способ
// let a2 = b.map((val,ind) => `${val} ${val % 2== 0 & 'juft'||'toq'}`)
// console.log(a2);

// // лругое условие
// let a3 = b.map((val,ind) => `${val} ${val % 2== 0 & 'juft'}`)
// console.log(a3);

// console.log('test'>'u');


// задача поменять местами с и d , не прибваляя новых переменных
// let c = 12;
// let d = 16;
// c = c + d;
// d = c - d; 

// console.log(arr `c=12, d=16`);

// // 1 мисол
// let arr = [ ]


// задачи на objekts
//  на тему методы objects----
let arr9 = [
    { id: 1, age: 23, name: "Davron", address: "tashkent" },
    { id: 2, age: 19, name: "Botir", address: "Samarqand" },
    { id: 3, age: 22, name: "Rashid", address: "Jizzax" },
    { id: 4, age: 16, name: "Islom", address: "Buxoro" },
    { id: 5, age: 21, name: "Ilyoz", address: "Namangan" },
    { id: 6, age: 20, name: "Hasan", address: "Andijon" },
    { id: 7, age: 11, name: "Azizbek", address: "Buxoro" },
];

function onSearch(x) {
    let arr10 = arr9.filter((val) => val.name.includes(x.toLowerCase())||
    val.name.includes(x.toUppCase()) )
    return arr10    
}
let j = onSearch('i');
// let k = val.name.inc
console.log(j);