
 for(let i = 0; i < 5; i++){
     console.log(i);
 }
 // тоже самое с вайл
 let I = 0;
 while(I < 10){
     console.log(I);
     I++;
 }

 // //  Пример

 function findAll(S){
     let s = 0;
     while (S<0){
         S = Number.parseInt(S/10);
         // s=s+1;
         s++;      
     }
     return s ;
 }
 console.log(findAll(9823544762334));

 let a = 0;
 while (a < 10) {
     console.log(a++);
 }
 let q = 0;
 do{
     console.log(q++);
 } while (q <10);
 

// Найти значение - сколько  A и a
//  дано var str = ' WebBrainAcadAmaya'
//   ответ А, а - 5

var str = 'WebBrainAcadAmya';
let  j = 0;
let s = 0;

 while (j < str.length) {
    if (str[j] == "a" || str [j] == "A") {
        s++;
       } 
       j++;
     
 }
 console.log(s);

//  это с вариантом for

//  for (var i = 0 ; i < str.length; i++) {
//     if (str[i] == "a" || str [i] == "A") {
//      w++;
//     } 
//     console.log(w);  
//  }



    
