// element 생성

const li = document.createElement('li'); 
li.className = 'list-group-item' ; //class name 부여 

// id 추가
li.id = 'new-item'; // id 부여 
li.setAttribute('name','New list item'); 


// 
li.appendChild(document.createTextNode('New list Item')); 

document.querySelector('ul.list-group').appendChild(li);

const link = document.createElement('a');
link.className = 'alarm-item'; 
link.innerHTML = '<i class="bi-alarm"></i>'

li.appendChild(link);

const listParent = document.querySelector('ul'); 
const list = document.querySelectorAll('li');

listParent.removerChild(list[0]); //지우기 위해선 부모도 있어야 하고, 요소의 자식도 있어야하고...

parentNode.replaceChild(newChild, oldChild);

const oldEl = document.getElementById('a');
const newEl = document.createElement('span');
newEl.textContent = 'hi'; 

// oldEl.parentNode.replaceChild(newEl, oldEl); 
listParent.replaceChild(newEl, oldEl);