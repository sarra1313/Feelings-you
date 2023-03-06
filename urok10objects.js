// ================= Objects =========================================

// Objects=> bir nechta malumotlar toplamini key va value korinishida saqlashi mumkun
//  bolgan maolumot hisoblanadi

// object ni elon qilish tipi object 
// здесь name, address и тд является ключом
let objName = {
   name: "Jasur",
   address: "Tashkent",
   email: "example@gmail.com",
   tel: 9798554955,
 }
console.log(typeof objName);

// object xossalarini olish 
// object xossalarini olishning 2hil usuli bor
// 1)
// console.log(objName.address, objName.email);
// 2)
// console.log(objName["name"]);



/// nested object

// let objName = {
//     name: "Jasur",
//     address: {
//         city: "tashkent",
//         viloyat: "Tashkent",
//         street: "naqqoshlik",
//     },
//     email: "example@gmail.com",
//     tel: 9798554955,
// }
// console.log(objName.address.viloyat);

////////////////////////////////
// let arrr = [
//     [1, 2, 3, 4],
//     [2, 3, 4, 6],
//     [45, 56, 67, 0]
// ];
// console.log(arrr[2][2]);
// let arr = [{
//     id: 1,
//     name: "Jasur",
//     address: "Tashkent"
// }, {
//     id: 2,
//     name: "Jamshid",
//     address: {
//         street: "naqqoshlik"
//     }
// }, {
//     id: 3,
//     name: "Botir",
//     address: "Jizzax"
// }];
// console.log(arr[1].address.street);


// let obj = {
//     name: 'Jasur',
//     address: ["toshkent", 12],
// }
// console.log(obj.address[1]);


////object methods
let user = {
    name: "Jasur",
    sayHello: function() {
        console.log(this);
    },
    saybye: () => {
        console.log(this.name);
    }
}
user.sayHello();
user.saybye();

// console.log(this);


let arr1 = [
    { id: 1, age: 23, name: "Davron", address: "tashkent" },
    { id: 2, age: 19, name: "Botir", address: "Samarqand" },
    { id: 3, age: 22, name: "Rashid", address: "Jizzax" },
    { id: 4, age: 16, name: "Islom", address: "Buxoro" },
    { id: 5, age: 21, name: "Ilyoz", address: "Namangan" },
    { id: 6, age: 20, name: "Hasan", address: "Andijon" },
    { id: 7, age: 11, name: "Azizbek", address: "Buxoro" },
];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

