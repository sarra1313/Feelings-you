// ================= Objects =========================================

// Objects=> бир нечта маълумотлар топламин key вa value куринишида сакланиши мумкин
// булган маълумот хисобланади

// object ни эълон килиш типи object 
// здесь name, address и тд является ключом, "Jasur","Tashcent" и тд является value
let objName = {
   name: "Jasur",
   address: "Tashkent",
   email: "example@gmail.com",
   tel: 9798554955,
 }
console.log(typeof objName);

// object xossalarini olish 
// object xossalarini olishning 2hil usuli bor -- объектни ичидан маълумот олиш
// 1) консулда тугри объектни номини ёзиб -- objName ва нукта билан уни key ни ёзамиз
//    -- address 
console.log(objName.address, objName.email);
// 2) энди консулга нукта эмас, квадрат скобка билан string ни ичида key ни ёзамиз
console.log(objName["name"]);



//==============  nested object (нестед объект)  =============================
// бу ичма ич объектлар булади

let objName1 = {
name: "Jasur",
address: {
        city: "tashkent",
        viloyat: "Tashkent",
        street: "naqqoshlik",
    },
email: "example@gmail.com",
tel: 9798554955,
}
// биринчи катта объектни ёзиб оламиз, нукта, уни ичидаги ёзилади ( здесь-address), 
// кейин нукта, ва калитини ёзилади
console.log(objName1.address.viloyat);

////////////////////////////////////////////////////////////////////////////////////////

// 1 ый пример
//  теперь пример, например с backendа идут данные
    
 let arr = [{
     id: 1,
     name: "Jasur",
     address: "Tashkent"
 }, {
     id: 2,
     name: "Jamshid",
     address: "Samarqand"
     
 }, {
     id: 3,
     name: "Botir",
     address: "Jizzax"
 }];
//  мы должны вывести на экран "Samarqand", вот как пишем в консоли -- так как это массив,
// то находим индекс, тоесть здесь это 1, потом через точку пишем ключ (key) объекта --
 console.log(arr[1].address);

// 
 let obj = {
     name: 'Jasur',
     address: ["toshkent", 12],
    // здесь пример, если данные в объекте предоставлены в виде аррая, те в квадратных
    // скобках
 }
 console.log(obj.address[1]);


//==================== object Мethods ================================================
//  н-р,нам дан объект с названием user
let user = {
     name: "Jasur",
//здесь применяем метод -- sayHello
     sayHello: function()
//здесь применяется функция фаншэн экспрешен
     {
         console.log("salom");
     },

//чтобы использовать этот метод, пишем  user.sayHello()
//  в конце обязательно ставим скобки, потому что это метод,
//  в терминале выйдет ответ -- salom, белого цвета, то есть сработал метод внутри userа

// но может и сработать арроу фанкшен, пишем всё что наверху, после фиолетовой скобки
// ставим запятую и в продолжении следующий метод
    saybye: () => {
    console.log("byee");
     }
 }
    user.sayHello();
    user.saybye();

    
//  console.log(this)

// let arr1 = [
//     { id: 1, age: 23, name: "Davron", address: "tashkent" },
//     { id: 2, age: 19, name: "Botir", address: "Samarqand" },
//     { id: 3, age: 22, name: "Rashid", address: "Jizzax" },
//     { id: 4, age: 16, name: "Islom", address: "Buxoro" },
//     { id: 5, age: 21, name: "Ilyoz", address: "Namangan" },
//     { id: 6, age: 20, name: "Hasan", address: "Andijon" },
//     { id: 7, age: 11, name: "Azizbek", address: "Buxoro" },
// ];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

