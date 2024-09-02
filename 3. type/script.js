let val; // undefined


val = String(111);  // tyep: string  
val = String(8+4); // string  : 8+4 
val = String(false); // string. false
val = String([1,2,3,4]) // 1,2,3,4 

// 위의 constructor 들을 이용하면 값의 타입을 변경할 수 있다.

val = (5).toString(); // string: 5 

// String -> Number

 // 소숫점까지 살리면서 .! 

// js 자체에 의해 자동으로 타입 변환 
let val1 = 2 ; //num
const val2 = 3 ; //num
const sum = val1 + val2 ; 
console.log(sum); // 5 
console.log(typeof sum); //number

//what if 
 val1= Number(2);
 sum1 = val1+ val2  ; 
 console.log(sum1); // 23
 console.log(typeof sum1); //string 

