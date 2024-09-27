let user = {
    name: 'john',
    age: 45
}
console.log(user.hasOwnProperty("email")); // 만든 거에는 없는데 이게 작동을 할까?  yes .! 
// email 프로퍼티가 있는지 없는지 확인해주는 boolean 이라 false로 뜬다. 에러 ㄴㄴ 
// hasOwnProperty는 어디서 온건가 -> 프로토타입 
// 글로벌 프로토타입 메서드 
// JS 객체와 다른 객체 메서드 속성 상속 메커니즘 => 프로토타입 체인 

function Person(name, email, birthDate){
    this.name = name;
    this.email = email;
    this.birthDate = new Date(birthDate); 
    /*
    this.calculateAge = function(){
        const diff = Date.now() = this.birthDate.getDate()
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
        // hasOwnProperty는 어떠한 객체에서든 가져다 쓸 . 수있는 것처럼 생성자함수로 객체 만들어 쓸 때 
        // 프로토타입에다 이를 넣어보자 
    }*/
}

Person.prototype.calculateAge = function(){
    const diff = Date.now() = this.birthDate.getDate()
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);  
    //prototype으로 따로 빼줌 
    //대신 . 이친구는 글로벌 프로토타입이 아닌 Person만을 위한 프로토타입 ! 
}

const jane = new Person('jane','jane@ab.com','7-10-91');
// const han = new Person('han','han@ab.com','2-9-91');

console.log(jane)


const testArray = [1,2,3]; 
Array.prototype.push = function(x){
    return 'pushed balue:' + x ; // 원래 push의 기능을 프로토타입 재설정을 통해 없애버림 
}

testArray.push(4);
console.log('testArray',testArray); 
// 결국 프로토타입을 상속해서 이 기능을 사용하고 있다는 건데.. 
// JS OOP 사용할 때 이 프로토타입 사용해서 클래스를 이용함 . 

class People {
    constructor(name,email,birthDate){
        this.name = name;
        this.email = email;
        this.birthDate = new Date(birthDate); 
    }

    introduce(){
        return  `hello my name is ${this.name}`
    } //class 에 method로 만들어주면 프로토타입으로 자동으로 들어간다. 결국 class oop문법 사용을 하지만 원래 있던 것을 사용ㅎ해서 구현하는 ,.. 

    static multipleNumbers(){
        return x * y ;  // constructor 안에 들어가 있음 이 static 은 클래스 자체에 들어가있음... 
    }
}

const han = new People('han','han@ab.com','2-9-91');

class Client extends People{ // People에 들어있는 name, email을 사용하고 싶어서 
    constructor(name, email, phone, address){
        super(name, email)
        // super란... 
        this.phone = phone;
        this.address = address ; 

    }
}
const hyun = new Client('hyun','hyun@bbb.com','29-8-98')  
hyun.introduce(); // 부모 클래스에 introduce를 상쇽..  프르토타입 체인은 계속 찾아들어가는 것 