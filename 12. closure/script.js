// function outerFunction(outerVariable){
//     return function innerFunction(innerVariable){
//         console.log('Outer function: ' + outerVariable)
//         console.log('Inner function: ' + innerVariable)
//     }
// }

// const newFunction = outerFunction('outside');

// console.log(newFunction);
// console.log(newFunction());
// newFunction('inside');


let a = 'a';

function functionB(){ // b 는 functionA에 있어서 접근을 못하는 상황 ㅍ
    let c = 'c';  
    console.log(a, b, c); 
}
function functionA(){
    let b = 'b';
    console.log(a,b); 
    functionB(); 
}

functionA(); // -> a, b

