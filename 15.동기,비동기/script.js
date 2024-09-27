//비동기 문제점 해결하는 방법 
//1. callback, promise, async await 
// 콜백 : 특정 함수를 매개변수로 전달받은 함수 

function fetchData(){
    return new Promise((resolve,reject)=>{ // promise는 실행함수를 매개변수로 받음. 
        const success = true; 
        if(success){
            resolve('성공')
        }else{
            reject ('실패'); 
        }
    }) //
}

fetchData() 
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.error(error); 
    })
    .finally(()=>{
        console.log('---모든작업끝')
    })
// Promise 를