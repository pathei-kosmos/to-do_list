"use strict";
// Declaration of the selectors
const list = document.querySelector('.list');
const input = document.querySelector('input');
const button = document.querySelector('#button1');

// Receives as argument the value of the input
function addNote(value) {
    const li = document.createElement('li');
    li.innerHTML = `${value} <span>❌</span>`;
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    list.append(li);
    input.value = "";
    crossListener();
}

// Receives as argument the ID of the li to close
function removeNote(i) {
    console.log(i);
    const li = document.querySelectorAll('li');
    list.removeChild(li[i]);
}

// Listen on the closing cross of the lists
function crossListener(e){
    let cross = document.querySelectorAll('span');
    cross.addEventListener('click', (e) => console.log(e));
}

// Listen to the send button
button.addEventListener('click', () => {
    if (input.value != "") {
        addNote(input.value)
    }
});

// Detects the pressing of the enter key to send without having to click on the button
input.addEventListener('keypress', (k) => {
    if (input.value != "" && k.which === 13) {
        addNote(input.value);
    }
});

