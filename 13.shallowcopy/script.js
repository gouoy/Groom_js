// shallow copy & deep copy 

const obj1 = {a:1, b:2};
const obj2 = {a:1, b:2};

console.log(obj1 === obj2); // false 
/// 주소 값은 다르다. 
console.log(JSON.stringify(obj1)===JSON.stringify(obj2));
// JSON.stringify()
// loadsh isEqual()   이 두가지로 깊은 복사... 하면 됨 .. 

//------------------------

// shallow copy : spread operator , Object.assign(); 
const aArray = [1,2,3]; 
// spread operatpr => 얕은 복사
const bArray = [...aArray, 4];
console.log('aArray', aArray);  //[1,2,3]
console.log('bArray', bArray); //[1,2,3,4]
console.log('bArray === bArray', aArray ===bArray ); // false 

// Object.assign() 이 역시 shallow copy
let cArray = Object.assign([], bArray);
console.log('cArray', cArray);
console.log('bArray === cArray', bArray === cArray); // false 

// depth 1 
cArray.push([5,6,7]); 
console.log('cArray',cArray) l // 1,2,3,4, Array(3)

const dArray = [...cArray, 10]; 
console.log('dArray', dArray );
dArray[4].push(8); // push는 원본 값을 변경해버림 . 
console.log('cArray', cArray);
console.log('dArray', dArray);

//shallow copy 
// spread operator, Object assign
// Array.from(), slice
// depth 복사 x 

//얕은 동결 freeze
const aObject = {
    'a' : 'a',
    'b' : 'b', 
    'cObject' : {'a':1, "b":2}
}

Object.freeze(aObject);
aObject.a = "c" ;
console.log('aObject', aObject); 
aObject.cObject.a = 3; 
console.log('aObject', aObject); 

//깊은복사
const newAObject = JSON.parse(Object.stringify(aObject));
console.log('aObject', aObject)
console.log('newAObject', newAObject)
aObject.cObject.a = 3; 
const nieuweAObject = {...aObject, cObject: {...aObject.}} // 깊은 복사 질문 

// structuredClone(mushrooms1) <- 이 부분질문 