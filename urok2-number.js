//================= Numbers (08.02.23 г) =====================================
// ================ М Е Т О Д Ы ===================================
// Number.isinteger (намбер исинтейжер)
// Number.parsint   (намбер парсинт)
// Number.parsfloat (намбер парсфлоат)
// toFixed          (туфиксд)

//================= Number.isInteger(true,false) ==============================
// isintagerning vazifasi numbrning butun yoki butun emasligini aniqlab beradi
// этот метот выявляет только, что число целое или нет

let a = 3;
console.log(Number.isInteger(a));
// или
let aa = 3.4;
console.log(Number.isInteger(aa));


//================= Number.parsint ============================================= 
//  -- uning vazifasi sonni butun songa aylantirib beradi
//  выделяет только целую часть

let b = 3.5;
console.log(Number.isInteger(b));
console.log(Number.parseInt(b));

//================= Number.parsfloat ============================================  
// -- унинг вазифаси string типидаги sonlarni number tipiga otqazib beradi va agar string
//  boshida number bolsa uni ham ajratib bera oladi

let c = "2331";
// допустим у нас есть число в типе стринг, те в кавычках -- "", и мы не можем испроьзовать 
// как число, поэтому надл перевести в число--намбер, для этого используетя парсфлот(parseFloat)
console.log(Number.parseFloat(c));
// но если мы просто напишем (с) в консоли, то получим в овете число белого цвета, те оно
//  так и останется в типе стринг, например:
console.log(c);

//  пример как парсефлоат выделяет число из текста:

let uzunlik = "12 metr";
console.log(Number.parseFloat(uzunlik) * 2);
// но если мы не напишем Number.parseFloat, то в ответе получим NAN (not a number), тк 
// число не переведётся в тип  Number

//======================  toFixed =================================================
// 

let num = 12.233;
console.log(num.toFixed(2));
// нам выделяет целое число, если в скобках пишем число "2" или "1", рн нам выдаст 
// ответ 12.23 или 12.2

 


//============ Type conversions===================================================
//  это функция обмена типов  на тип number, н-р со string на number, с boolen ==> number

console.log(Number(true), "truening number qiymati");
console.log(Number(false), " falsning number qiymati");
console.log(Number("12"), "stringdagi sonni number tipiga otqazib beradi");
console.log(Number("   11     "));
console.log(Number("12.34"));
console.log(Number("John"));

///  If else

// if (Number("0n")) {
//     console.log("bu shart togri");
// } else {
//     console.log("shart notogri");
// }

// Boolean conversion   Falsy   va TtueThy
//Falsy values
// 0
//""
//false
//undefined
//NaN
//-0
//null
//0n

//Truthy values lar falsy valuega kirmaydigan barcha qiymatlar kiradi
// "kudygckdg"

//agar a sonijuft bolsa ekranga  bu juft son  dep chiqarsin agar toq bolsa toq son dep chiqarsin

let a0 = 12;