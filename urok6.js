//  1 ая тема=======================

// quotes (коутс), яъни стринг дата типлари, куштирнокни ичидаги типлари
//  bizda 3 hil quotes bor: "" (иккиталик куштирнок),
//                          '' (битталик куштирнок),
//                          `` (ётик куштирнок) 
//======    " " ====================
 console.log("o'qituvchi");

 // =========== ' '  ====================== 
 console.log('O"qituvchi');
    //  здесь во втором примере если мы пишем в одинарных ковачках,
    //  то в слове надо писать двойную ковычку, чтоб нам не выдалась ошибка

// ==========  `  `  ==================
// самые важные ковычки, н-р переменной а мы присваеваем 12

let Q = 12;
console.log("Q ning qiymati uning yoshiga teng");
    // тепада эълон килган узгарувчиларни стингни ичида ишлатиш учун бизга ётик
    // куштирнок керак
console.log(`${Q} ning qiymati uning yoshiga teng`);
    //  знак доллар нам переведёт букву в значение, те в 12
// ЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮ

//===========  helpers ===============================
 console.log("\t best");
    //   ставиться обратный слеш потом спецсимвол буква t - табуляция (отступ)
    // все спецсимволы начинаються с обратного слеша \- так называемого "символа 
    // экранирования", в итоге применения мы видим некий отступ, в тех местах, где мы 
    // установили спецсимвол, также есть другой спецсимвол \+n (функция интера -
    // перевод строки ), н-р:

 console.log("this is our \n best lesson");


    // допустим нам дана переменная name
 let names = "Abbos";
    //  хотим узнать в консоли количество символов  слова, применяем ленгс
    // ==== length - длина строки. Свойства length
 console.log(names.length);

     // теперь допустим нам нужно выделить конкретный символ строки,какую нибудь
     // букву в данном слове, пишем переменные и ставим квадратные скобки и позицию
     //  данного символа, начиная с 0, нулевая позиция это первая буква, те в 
     // данном случае А,
let b = names[0];
console.log(b);
     // чтобы выделить несколько символов воспользуемся slice ( сласом):
     //  let names = "Abbos";
 let c = names.slice(1, 3)
 console.log(c)
     //  1 и 3 -- это индексы, получим bb

     //  теперь рассмотрим свойства, которые делают маленькие буквы и большие,
     // это называется изменение регистра
let stri ="This is Just Text"
console.log(stri.toLowerCase());
console.log(stri.toUpperCase());

     // toLowerCase() text ichidagi katta harflarni kichikiga aylantirib beradi
     // toUpperCase() harflarni kattasiga ogirib beradi


 //   что если нам нужно в строке , что-нибудь найти, есть несколько методов:

// ====== 1 метод ==== indexOf ======== 
// он ищет подстроку в указанной нами сторке, начиная с определёной позиции, 
// которую мы тоже можем указать при этом, индексоф врзвращает позицию на которой
//  распологается совпадение, либо возвращает -1 при отсктствии совпадения


// string ichida  malum harfning  tartib raqamini

//  olish uchun ishlatiladi

// let str = "Salom";
// let s = str.indexOf("l");
// console.log(s);
// tyeOf()-malumotlarni qaysii data typega kirishini aniqlab beradi
// function fff() {}
// let a;
// console.log(typeof a);
// let str = 12;
// let num = "23";
// // let r = +num;
// let r = Number(num);
// let t = String(str);
// console.log(typeof t);



//
// for
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// //  string tipidagi numlar beriladi uning raqamlari yigindisi topilsin
// let num = "123452";
// console.log(typeof num[0]);
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     sum = sum + (+num[i])
// }
// console.log(sum);





// for (let i = 0; i < 10; i++) {
    // console.log(i);
   
    
// }
// примеры

// let str = "Student";
// let d = str[3]
// console.log(str.length);
// console.log(d);

// let str = "Student";
// let d = str.slice(3, 7)
// console.log(str.length);
// console.log(d);

let str = "Student";
// console.log(str.toLocaleLowerCase());

// console.log(str.toLocaleUpperCase());
let s = str.indexOf("d")
console.log(s);
//[задача на дом 1 задание]

let nam = "2457679";
if (Number.length % 2 == 1) {
    console.log(nam[Number.parseInt(nam.length / 2)]);
}
else{
    let A = nam[nam.length / 2 - 1]
    let B = nam[nam.length / 2 ]
    console.log( ( +A  +  +B) / 2);
}

// 2ая задача
let num = "2395078"
let max = num[0];
let min = num[0];
for (let i = 0; i < num.length; i++)
 {
    if (max < num[i]) {
        max = num[i];
    }
    if (min > num[i]) {
        min = num[i]
    }
}
console.log(max);
console.log(min); 



 

for(let i = 0; i < 5; i++){
    console.log(i);
}
// тоже самое с вайл
let I = 0;
while(I < 10){
    console.log(I);
    I++;
}

function findAll(S){
    let s = 0;
    while (S>0){
        S = Number.parseInt(S/10);
        // s=s+1;
        s++;      
    }
    return s ;
}
console.log(findAll(9823544762334));

let q = 0;