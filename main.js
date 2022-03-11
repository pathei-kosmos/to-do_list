"use strict";
// Declaration of the selectors
const list = document.querySelector('.list');
const input = document.querySelector('input');
const button = document.querySelector('#button1');
let liID = localStorage.getItem('liID') ?? 0;

// Retrieves locally stored entries if they exist
if (localStorage.length != 0) {
    for (let i = 0; i < localStorage.length; i++) {
        let arr = Object.keys(localStorage).sort();
        let parser = arr[i];
        if (localStorage.getItem(parser) != null && 
        arr[i] != 'liID' ) {
            const li = document.createElement('li');
            li.innerHTML = localStorage.getItem(parser);
            li.setAttribute('id', parser);
            li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
            list.append(li);
            liID = localStorage.getItem('liID');
            liID++;
        }
    }
}

// Receives as argument the value of the input
function addNote(value) {
    const li = document.createElement('li');
    li.innerHTML = `${value} <span>❌</span>`;
    li.setAttribute('id', liID);
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    list.append(li);
    input.value = "";
    localStorage.setItem(`${liID}`, li.innerHTML);
    localStorage.setItem('liID', liID);
    liID++;
}


// If the click is on the closing cross, run removeNote()
function crossListener(e) {
    let target = e.target;
    if (target.localName == 'span') {
        removeNote(target);
    }
}

// Receives as argument the target of the click
function removeNote(target) {
    let i = target.parentNode.id;
    localStorage.removeItem(i);
    list.removeChild(target.parentNode);
}

// Listen to the send button
button.addEventListener('click', () => {
    if (input.value != "") {
        addNote(input.value);
    }
});

// Detects the pressing of the enter key to send without having to click on the button
input.addEventListener('keypress', (k) => {
    if (input.value != "" && k.which === 13) {
        addNote(input.value);
    }
});

// Listen to all clicks on the page
document.addEventListener('click', crossListener);