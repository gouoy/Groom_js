// 변수, 상수 생성 
const createBtn = document.getElementById('create-btn')
const list = document.getElementById('list')

let todos = [];

createBtn.addEventListener('click',createNewTodo)

function createNewTodo(){
    // 새로운 아이템 객체 생성 
    const item = {
        id: new Date().getTime(),
        text: '',
        complete:false
    }
    // 배열에 처음새로운 아이템 추가 
    todos.unshift(item); // 추가될 요소 많으니 따로 빼서 사용

    // 요소 생성 
    const {
        itemEl, // 여기에다가 넣어주면 . 댐
        inputEl,
    }= createTodoElement(item);
    
    list.prepend(itemEl);
    inputEl.removeAttribute('disabled')

    inputEl.focus();
    saveToLocalStorage();
}

    function createTodoElement(item){ // Todo 요소를 만드는 함수 
        const itemEl = document.createElement('div')
        itemEl.classList.add('item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.complete;  // true 일 시 체크상태 

        if(item.complete){ // click에 따라 class에 complete를 넣어주고, 안 되어있으면 없앰. =
            itemEl.classList.add('complete')
        }

        const inputEl = document.createElement('input')
        inputEl.type = 'text';
        inputEl.value = item.text; //이 타겟의 밸류는 인풋의 텍스트 값에 있을 것. 
        inputEl.setAttribute("disabled",""); 

        const actionsEl = document.createElement('div')
        actionsEl.classList.add('actions');

        const editBtnEl = document.createElement('button')
        editBtnEl.classList.add('material-icons')
        editBtnEl.innerText='edit'

        const removeBtnEl = document.createElement('button')
        removeBtnEl.classList.add('material-icons')
        removeBtnEl.innerText='remove'

        actionsEl.append(editBtnEl);
        actionsEl.append(removeBtnEl);

        itemEl.append(checkbox)
        itemEl.append(inputEl);
        itemEl.append(actionsEl);  

        checkbox.addEventListener('change', ()=>{
            item.complete=checkbox.checked;
            if(item.complete){
                itemEl.classList.add('complete')
            }else{
                itemEl.classList.remove('complete')
            }
            saveToLocalStorage(); 
        })

        inputEl.addEventListener('input',()=>{
            item.text = inputEl.value; 
        })

        inputEl.addEventListener('blur',()=>{
            inputEl.setAttribute('disabled',"")
            saveToLocalStorage(); 
        })
        editBtnEl.addEventListener('click',()=>{
            inputEl.removeAttribute('disabled')
            inputEl.focus();
        })

        removeBtnEl.addEventListener('click', ()=>{
            // 데이터 지우기
            todos = todos.filter(todo=>todo.id !== item.id)
            // 요소 지우기 
            itemEl.remove(); // 노드 지워버림 
            saveToLocalStorage(); 
        })
        return {
            itemEl,
            inputEl,
            editBtnEl,
            removeBtnEl // 원하는 애들을 . 리턴을 해주면 됨 ..? 먼 소리야? 이벤트 발생할 때마다 . 를 얘기하는 건가 
        }
    }

    function displayTodos(){
        loadFromLocalStorage();
        for(let i=0; i<todos.length;i++){
           const item = todos[i];
           const {itemEl}= createTodoElement(item)
           list.append(itemEl);
        }
    }

    displayTodos();


function saveToLocalStorage(){ // browser  // todos의 값이 바뀔때마다 . 이함수 호출시켜줘야 . 
    const data = JSON.stringify(todos)
    localStorage.setItem('my_todos',data)
}

function loadFromLocalStorage(){
    const data = localStorage.getItem('my_todos');
    if(data){
        JSON.parse(data); // parse 는 분석 
    }
    
}

/*
*/ 