// =====================  array ( массив)==============================

// array - или массив в javaScript является глобальным объектом, который 
// используется для создания массивов; которые представляют собой высокоуровневые
// спископодобные объекты.== Массивы== в js могут работать и как очередь, и как стек.
// Мы можем удалять\добавлять элементы (объекты) как в начало, так и в конец
// массива.
// == Массивы в js представляют собой спископодобные структуры, которые предназначены
// для хранения упорядочных данных.

// == ARRAY== бир нечта вактнинг узида бир нечта турли типли (жаваскрипдаги 8 та типи
//    билан ишлайди ==  number, null, string, undefind, symbol, objects,
//  bigint, boolean (true, false)) кийматларни узида жамлай  оладиган туплам хисобланади
  
// === array яратишни 2 усули бор, яъни биз аррай эълон килишимизни 2 усули бор

//  ====== 1 усул=====================
// array номи ёзилади, хар доим let, var ёки const деб очилади, н-р,
//  битта бош аррай эълон килдик:

let arr = [];
console.log(arr);


//  ====== 2 усул =====================
// бу new калит сузи оркали эълон килинади:

let arr1 = new Array();
console.log(arr1);

//  энди шу array га маъиумот киритамиз (хохлаганча)---
let arr2  = [12, 3, 4,"test", undefined, true, false]
// энди аррайни ичида кандай маълумот керак булса бизга, уща маълумотларни олиб 
// ишлатишимиз мумкин

// ==== ARRAY ичидан маълумот олиш ==============
// н-р, индексни топиш -- undefind ни индекси нечи?

console.log(arr2[4]);

//  ========= ARRAY  METODS (методлари)  ===========================

     // arrayга ОХИРИДАН elelmt КУШИШ uchun push() methodi ishlatiladi 
     // push mетodi ichiga hohlagancha  malumot yozish mn, н-р:

 let arr4 = [5, 67, 8, 9, 3];
 console.log(arr4);
 arr4.push(4, 5);
 console.log(arr4);

     //arrayга БОШИДАН элемент КУШИШ учун unshift() methodi foydalaniladi
     // параметры прибавляются столько сколько хотим , через запятую.

 let arr5 = [67, 8, 9, 3];
 console.log(arr5);
 arr5.unshift(9, 4);
 console.log(arr5);

    // array ОХИРИДАН факат битта elemnt УЧИРИШ uchun pop() methodidan foydalanish kerak
    //  В методе рор  параметр не пишется , просто пустык скобки() 

 let arr6 = [67, 8, 9, 3];
 console.log(arr6);
 arr6.pop()
     //  если нам нужно убрать несколько, то повторяем столько arr6.pop(), сколько нужно
     //  убрать параметров
 console.log(arr6);

      //array БОШИДАН факат bitta elemnt УЧИРИШ учун  shift()  
      // methodi ham parametr olmaydi
    let arr7 = [67, 8, 9, 3];
    console.log(arr7);
    arr7.shift()
        //  если нам нужно убрать несколько, то повторяем столько arr.shift(), сколько нужно
        //  убрать параметров
    console.log(arr7);



 //=== Array элементлар билан ишлашда 4 та амал бор, у КРУД деб аталтди===
       // CRUD
       // C - create(крейт- яратмок дегани, яъни янги маълумот яратмок, или кушмок) =>
       //    malumot qoshish uchun, например push и unsrift - это крейт, потому что он прибавляет
       //    
       // R - read(рид) =>malumotni oqib olish uchun 
       // U-  Update(апдейт - узгартириш дегани) =>malumotni ozgartirish uchun
       // D - delete(делит)=>malumotni ochirish uchun - сюда относиться pop и srift
// ===== Array элементини узшагартириш  =================
       // н-р, дано:
let arr8 = ["olma", "behi", "limon", "anor"]
// выбираем какой-нибудь элемент,н-р, 2- "behi" и пишем:
console.log(arr8);
arr8[2] = "mandarin";
console.log(arr8[2]);

//====== Arrayning uzunligini topish uchun=====================
// (array ichida nechta malunot borligini aniqlash )

let arr9 = ["behi", "limon", "anor","olma",4, undefined]
console.log(arr9.length);


//===== ikkita Arrayni qoshish uchun concat() - конкет methodidan foydalaniladi=====

let arr0 = new Array("olma", "behi");
console.log(arr0);
     // создаем ещё один array =>
let arr10 = ["mandarin", "limon"]
console.log(arr10);
     // теперь нам надо соединить два аррая, соединяем с помощью конката == concat() 
     // открываем новый аррай, т.е. 
     // первое пишем 1ый аррай, потом пишем в concat(), тот аррай, который хотим соединить
     // и получаем:
let lastArr = arr10.concat(arr0);
console.log(lastArr);



//1-misol
//1)ozida 10ta malumot saqlatdigan array yarating va ekranga chiqaring 
//2)ushbu arrayning ichida nechta malumot borligini  toping  va ekranga chiqaring 
//3)ushbu array oxiridan ikkita elemnt qoshing  va ekranga chiqaring 
//4)ushbu array boshidan ikkita elemnt qoshiing  va ekranga chiqaring 
//5)ushbu array oxiridan 3 ta elent ochiring  va ekranga chiqaring 
//6)ushbu array boshidan 3ta elemnt ochiring \ va ekranga chiqaring 
//7)ushbu arrayning 5 inchi elemntini ozgartiring  va ekranga chiqaring 
//8)ushbu array bilan ["Temur","Rashid","Jasur"] quydagi arrayni qoshing  va ekranga chiqaring

// /////////////////////////////////////////////////////////////////////

// 1

let arr11 = [13, 'sliva', 'parta', 'telephon', 8, 'number', 'gorod 7', 'igrushka',
 49, 'BMW']
 // 1)
 console.log(arr11);
 // 2)
 console.log(arr11.length);
 //  3)
 arr11.push('mogy', 'hochu')
 console.log(arr11)
 //  4)
  arr11.unshift('uborka', 'posuda')
 console.log(arr11)
 //  5)
 arr11.pop()
 arr11.pop()
 arr11.pop()
 console.log(arr11);

 // 6)
arr11.shift()
arr11.shift()
arr11.shift()
console.log(arr11);

// 7)
arr11[5] = 'mandarin';
console.log(arr11);

// 8)
arr11.push("Temur","Rashid","Jasur")
console.log(arr11);

let arr12 = new Array("Temur","Rashid","Jasur")
let lastArr1 = arr11.concat(arr12)
console.log(lastArr1);

// ююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююю
// 2 мисол
let arrA =  ["Temur","Rashid","Jasur"]
// // сначала мы ваделяем 1 ый элемент, те "Rashid",в скобки
 console.log(arr12[1])
  let s =0
  for (let i = 0; i < arrA[1].length; i++) {
    
      s++;
 }
 console.log(s);

// 3- мисол 
// ozida 10ta malumot saqlatdigan array yarating va ekranga chiqaring
// keyin 4tasi raqam
// 4tasi harf yoki soz
// 2tasi ture va false bosin
// va arredan sonlani ajratvolib yigindisni topish kere
    

