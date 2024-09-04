// JS Loop : code블럭을 여러번 실행하는 것 

/*
대표적인 친구들 

For : 코드블록을 여러번 반복 

For/In => 객체의 속성을 따라 반복 

While => 지정된 조건이 True 일 때, 코드 블록을 반복하기. 

Do/While  => 지정된 조건이 True인지 뭔지 관계없이 해보는 .. 


*/

for( let i= 0; i < 10; i++){
    if(i ===3){
        console.log('It is 3')
        // continue; 이 차례에서만 생략 
    }
    if(i===5){
        console.log('It is 5');
        // break;  여기부터 동작 그만! 
    }

    console.log('number'+ i); 
    };

    //for/in 객체의 속성을 따라 반ㅂ고 
    const user = {
        name: 'han',
        probince: '경기도',
        city: '성남시'
    }
    for(let x in user){
        console.log(`${x} : ${user[x]}`);
    }

    // while 지정된 조건이 true 코드 블록 반복 
    // let i = 0 ; 

    // i<10 이 부분이 조건 
    while (i<10){
        console.log('Number' + i); 
    }

    // do/while 
    let i = 0;

    do{
        console.log('Number'+i);
        i++;
    }
    while(i<10); 

// 배열 Loop 컨트롤
const locations = ['seoul', 'busan', 'jeju']
// for(let i = 0; i< locations.length ; i++){
//     console.log(locations[i]); 
// }

locations.forEach(function(location, index, array){
    console.log(`${index} : ${location}`);
    console.log(array);
})

// 0: seoul
//['seoul', 'busan', 'jeju']

// 1: busan
// ['seoul', 'busan', 'jeju']

// 2:jeju 
// ['seoul', 'busan', 'jeju'] 

//또 다른 메소드 
locations.map(function(location,index, array){
    console.log(`${index} : ${location}`);
    console.log(array);
})


// Dom collection : 배열같이 생겼는데 배열은 아님. Dom collection은 map은 사용 불가, forEach는 사용 가능
// map으로 하면 새로운 배열이 생성됨 (배열 수정이 아니라..)

