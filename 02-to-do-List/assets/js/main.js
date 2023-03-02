let list = document.getElementById('list');
let li = document.getElementById('li');
let inputText = document.getElementById('task');

function limpaInput() {
    inputText.value = '';
    inputText.focus()
}

function createLi(inputText) {
    let createLi = document.createElement('li');
    createLi.innerHTML = inputText;
    list.appendChild(createLi);
    createDeleteBtn(createLi);
}

function createDeleteBtn(li) {
    li.innerText += ' ';
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.setAttribute('class', 'deleteBtn')
    li.appendChild(deleteBtn);
}

document.addEventListener("click", function(e) {
    const el = e.target;

    if (el.classList.contains('deleteBtn')) {
        el.parentElement.remove();

    } 
});
 
submit.addEventListener("click", function() {
    createLi(inputText.value);
    limpaInput()
    
});

 