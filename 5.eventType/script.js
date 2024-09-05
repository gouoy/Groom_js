const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('form');
const title = document.querySelector('h2');

// 객체 클릭
submitBtn.addEventListener('click',handleEvent)

// 마우스 클릭
submitBtn.addEventListener('mousedown', handleEvent)

 //순서 down -> up -> click
// mouse double click
submitBtn.addEventListener('dbclick', handleEvent); 

//mouseup
submitBtn.addEventListener('mouseup',handleEvent)
//mouseenter
submitBtn.addEventListener('mouseenter',handleEvent)
//mouseleave
submitBtn.addEventListener('mouseleave',handleEvent)
//mousemove
submitBtn.addEventListener('mousemove',handleEvent)

form.addEventListener('submit', handleEvent); 

const emailInput = document.getElementById('email')


emailInput.addEventListener('keydown', handleEvent) // 키 눌렀을 때 
emailInput.addEventListener('keyup', handleEvent) // 키를 눌렀다가 떼었을 때 
emailInput.addEventListener('keypress',handleEvent) // 키의 문자가 입렫ㄱ되었을 때 
// 순서 keydown ,  keypress , keyup 
emailInput.addEventListener('focus',handleEvent) // 키의 문자가 입렫ㄱ되었을 때 
emailInput.addEventListener('blur',handleEvent) // 키의 문자가 입렫ㄱ되었을 때 

emailInput.addEventListener('cut',handleEvent) // 키의 문자가 입렫ㄱ되었을 때 
emailInput.addEventListener('paste',handleEvent) // 키의 문자가 입렫ㄱ되었을 때 
emailInput.addEventListener('input',handleEvent) // 인풋 요소 값이 변경되었을 때 

function handleEvent(e){
    console.log(`Event Type: ${e.type}`) // event 객체
    
    if(e.type === 'submit'){

        e.preventDefault(); // 자동적으로 리프레쉬를 막아주는 . 기본값을 막아주는 
    }

    title.innerText = e.target.value;
}