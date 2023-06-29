'use strict';

/*<label class="todo__item ">
<input type="checkbox">
<div class="text">teste de item 1</div>
<input type="button" value="X">
</label> */

const criarItem = (tarefa, status) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
    <input type="checkbox" ${status}>
    <div class="text">${tarefa}</div>
    <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item)

}
criarItem('fazer tal coisa', 'checked')