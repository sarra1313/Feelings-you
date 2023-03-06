// =====   Array ichidagi istalgan elemntni ochirish  delete vazifasi 
//osha elеmntni ochiradi faqat u turgan joy qoladi 
let arr = ["olma", "behi", "limon", "mandarin"]; //["olma",<empty>, "limon", "mandarin"];
console.log(arr);
delete arr[1];
delete arr[1];
console.log(arr);

// splice ushbu method aray ichidan hohlagan elemntni ochirindshi
// mumkun istalgan joydan boshlab elemnt qoshishi mumkun
// splice ichida yozilgan parametrlarning birinchi index 
//ikkinchi parametri  count(nechta) 
// keyingi parametrlari hammasi arrayga qoshiladugan elentlar boladi
let arr1 = ["olma", "behi", "limon", "mandarin", "banan"];
arr.splice(2, 1, "tarvuz");
console.log(arr1);

// slice array ichidan elemntlarni kopiravat qilib olib beradi
let arr0 = ["olma", "behi", "limon", "mandarin", "banan", 5, 7, 8];
let arr2 = arr0.slice(2);
let arr3 = arr0.slice(2, 5);
let news = ["olma", "behi", "limon"];
console.log(arr2);
console.log(arr3);

//indexOf elemntlarnig indexini aniqlab beradi

let arr4 = ["olma", "behi", "limon", "mandarin", "banan", 5, "olma", 8];
arr.splice(arr4.indexOf("olma"), 1);
console.log(arr4);
// /lastindexOf elemnt larnigindexini aniqlab beradi
// let arr = ["olma", "behi", "limon", "mandarin", "banan", 5, "olma", 8];
// arr.splice(arr.lastIndexOf("olma"), 1);

// console.log(arr);

//reverse()- array ichidagi malumotlarni teskarti tartibda joylashtrib beradi
let arr6 = ["olma", "behi", "limon", "mandarin", "banan", 5, "olma", 8];
arr.reverse();
console.log(arr6);

//lastindexOf elemntlarnig indexini aniqlab beradi
let arr7 = ["olma", "behi", "limon", "mandarin", "banan", 5, "olma", 8];
arr.splice(arr7.lastIndexOf("olma"), 1);

console.log(arr7);

//sort() bu method array ichidagi elemntlarni tartiblab beradi
let arr5 = [6, 7, 233, 12, 0, 6, -1];
arr.sort((a, b) => a - b);
console.log(arr5);


// 24.02.2023 г
// продолжение урока
// find
// Метод массива find() вернёт первый найденный в массиве элемент, который подходит 
// под условие в переданной колбэк-функции. Если в массиве не найдётся ни одного
//  подходящего элемента, то вернётся значение undefined.
// .find()- Поиск по массиву будет искать по тем критериям, которые вы придумали.

let arrF = [1, 3, 4, 9,  18, 15 ]
let result = arrF.find((val, ind) => val % 2 == 0 && val % 3 == 0)
console.log(arrF);
console.log(result);

// filtr

// Метод массива .filter() позволяет получить новый массив, отфильтровав элементы с помощью
// переданной колбэк-функции. Колбэк-функция будет вызвана для каждого элемента массива
// и по результату функции примет решение включать этот элемент в новый массив или нет.
// Методы .filter() и find() похожи. Главное отличие find() от filter() в том, 
// что find() возвращает первый подходящий элемент, а filter() вернёт массив со всеми
// подходящими элементами.
let arrG = [1, 3, 4, 9,  18, 15, 36, 72, 48 ]
let result1 = arrG.filter((val, ind) => val % 2 == 0 && val % 3 == 0)
console.log(arrG);
console.log(result1);

// split

let str = "This is a car"
let a = str.split("");
let a1 = str.split(" ");
let a2 = str.split("i")


console.log(a, a1, a2);

// // //  join
 let str2 = "This is a car"
let a3 = str.join("/");
let a5 = str.split(" ");

console.log( a5);

// map

// Метод map() позволяет трансформировать один массив в другой при помощи функций-колбэка.
// Переданная функция будет вызвана для каждого элемента массива по порядку. Из результатов
// вызова функции будет собран новый массив.

let arrH = [1, 2, 3, 4 ,5]

    

let arr8 = [
    { id: 1, age: 23, name: "Davron", address: "tashkent" },
    { id: 2, age: 19, name: "Botir", address: "Samarqand" },
    { id: 3, age: 22, name: "Rashid", address: "Jizzax" },
    { id: 4, age: 16, name: "Islom", address: "Buxoro" },
    { id: 5, age: 21, name: "Ilyoz", address: "Namangan" },
    { id: 6, age: 20, name: "Hasan", address: "Andijon" },
    { id: 7, age: 11, name: "Azizbek", address: "Buxoro" },
];

for (let i = 0; i < arr8.length; i++) {
   if (arr[i].age > 20) {
    console.log(`${arr8[i].name }arr8[i].adress}dan id si ${arr[i]=id}ga`);
   }
    
   }

